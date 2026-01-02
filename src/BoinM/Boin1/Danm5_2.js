import React from 'react';
import { View, StyleSheet } from 'react-native';

// セルのコンポーネントをインポート
import Cell00 from './Cell/Danm5_2/0_0';
import Cell01 from './Cell/Danm5_2/0_1';
import Cell02 from './Cell/Danm5_2/0_2';
import Cell03 from './Cell/Danm5_2/0_3';
import Cell04 from './Cell/Danm5_2/0_4';
import Cell05 from './Cell/Danm5_2/0_5';
import Cell06 from './Cell/Danm5_2/0_6';

// コンポーネントマッピング
const cellComponents = {
  '0-0': Cell00,
  '0-1': Cell01,
  '0-2': Cell02,
  '0-3': Cell03,
  '0-4': Cell04,
  '0-5': Cell05,
  '0-6': Cell06,
};


const Danm5_2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSpace} />
      <View style={styles.chartArea}>
        <View style={styles.row}>
          {Array(7).fill(null).map((_, index) => (
            <CellWrapper key={index} index={index} type='0-' />
          ))}
        </View>
      </View>
      <View style={styles.rightSpace} />
    </View>
  );
};


const CellWrapper = ({ index, type }) => {
  let specialStyle = {};

  // 00セル_スペース
  if (type === '0-' && index === 0) {
    specialStyle = { width: '3.15%' };
  }
  // 01セル_スペース
  if (type === '0-' && index === 1) {
    specialStyle = { width: '21.3%' };
  }
  // 02セル_スペース
  if (type === '0-' && index === 2) {
    specialStyle = { width: '1.5%' };
  }
  // 03セル_スペース
  if (type === '0-' && index === 3) {
    specialStyle = { width: '16.3%' };
  }
  // 04セル_スペース
  if (type === '0-' && index === 4) {
    specialStyle = { width: '19.0%' };
  }
  // 05セル_スペース
  if (type === '0-' && index === 5) {
    specialStyle = { width: '19.0%' };
  }
  // 06セル_スペース
  if (type === '0-' && index === 6) {
    specialStyle = { width: '19.05%' };
  }

  return (
    <View key={index} style={[styles.cell, specialStyle]}>
      <CellContent index={index} componentKey={`${type}${index}`} />
    </View>
  );
};


const CellContent = ({ index, componentKey }) => {
  const Component = cellComponents[componentKey];
  let cellContentStyles = styles.cellContent;
  let additionalStyles = {};

  // '0-'componentKeyスタイル
  if (componentKey.startsWith('0-')) {

    // 上線_o.2
    if ([4, 5, 6].includes(index)) {
      additionalStyles.borderTopWidth = 0.2;
    }
    // 左線
    if ([0, 1, 2, 3].includes(index)) {
      additionalStyles.borderLeftWidth = 0.5;
    }
    // 左線
    if ([5, 6].includes(index)) {
      additionalStyles.borderLeftWidth = 1.5;
    }
    // 左・赤：2.0
    if ([4].includes(index)) {
      additionalStyles.borderLeftWidth = 2;
      additionalStyles.borderLeftColor = 'red';
    }
    // 右・赤：2.0
    if ([6].includes(index)) {
      additionalStyles.borderRightWidth = 2;
      additionalStyles.borderRightColor = 'red';
    }
  }

  return (
    <View style={[cellContentStyles, additionalStyles]}>
      {Component && <Component style={cellContentStyles} />}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    borderWidth: 0,
  },
  leftSpace: {
    width: '4%',
    backgroundColor: 'white',
  },
  chartArea: {
    width: '92%',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  cell: {
    width: '19.0%',
    height: '100%',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 0,
  },
  specialCell: {
    width: '1.5%',
  },
  extraSpecialCell: {
    width: '16.3%',
  },

  rightSpace: {
    width: '4%',
    backgroundColor: 'white',
  },
  cellContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Danm5_2;