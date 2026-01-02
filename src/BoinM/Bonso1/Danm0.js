import React from 'react';
import { View, StyleSheet } from 'react-native';


// セルのコンポーネントをインポート 
import Cell00 from './Cell/Danm0/0_0';
import Cell01 from './Cell/Danm0/0_1';
import Cell02 from './Cell/Danm0/0_2';

// コンポーネントマッピング
const cellComponents = {
  '0-0': Cell00,
  '0-1': Cell01,
  '0-2': Cell02,
};


const Danm0 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSpace} />
      <View style={styles.chartArea}>
        <View style={styles.row}>
          {Array(3).fill(null).map((_, index) => (
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

  // セル幅
  if (type === '0-' && index === 0) {
    specialStyle = {
      width: '17%',
    };
  }
  if (type === '0-' && index === 1) {
    specialStyle = {
      width: '1.5%',
    };
  }
  if (type === '0-' && index === 2) {
    specialStyle = { width: '81.5%' };
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

    // 上）_0.5
    if ([0, 2].includes(index)) {
      additionalStyles.borderTopWidth = 0.5;
    }
    // 左）_0.5
    if ([0, 1, 2, 3].includes(index)) {
      additionalStyles.borderLeftWidth = 0.5;
    }
    // 右）_0.5
    if ([2, 3].includes(index)) {
      additionalStyles.borderRightWidth = 0.5;
    }
  }

  return (
    <View style={[cellContentStyles, additionalStyles]}>
      {Component && <Component />}
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
    width: '8%',
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

export default Danm0;
