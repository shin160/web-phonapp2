import React from 'react';
import { View, StyleSheet } from 'react-native';

// セルのコンポーネントをインポート
import Cell00 from './Cell/Danm3/0_0';
import Cell01 from './Cell/Danm3/0_1';
import Cell02 from './Cell/Danm3/0_2';
import Cell03 from './Cell/Danm3/0_3';
import Cell04 from './Cell/Danm3/0_4';
import Cell05 from './Cell/Danm3/0_5';
import Cell06 from './Cell/Danm3/0_6';
import Cell07 from './Cell/Danm3/0_7';
import Cell08 from './Cell/Danm3/0_8';
import Cell09 from './Cell/Danm3/0_9';
import Cell010 from './Cell/Danm3/0_10';
import Cell011 from './Cell/Danm3/0_11';
import Cell012 from './Cell/Danm3/0_12';

// コンポーネントマッピング
const cellComponents = {
  '0-0': Cell00,
  '0-1': Cell01,
  '0-2': Cell02,
  '0-3': Cell03,
  '0-4': Cell04,
  '0-5': Cell05,
  '0-6': Cell06,
  '0-7': Cell07,
  '0-8': Cell08,
  '0-9': Cell09,
  '0-10': Cell010,
  '0-11': Cell011,
  '0-12': Cell012,
};


const Danm3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSpace} />
      <View style={styles.chartArea}>
        <View style={styles.row}>
          {Array(12).fill(null).map((_, index) => (
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

  // 03セル_スペース
  if (type === '0-' && index === 2) {
    specialStyle = { width: '1.5%' };
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

    // 上線_無

    // 左線：青色、2ピクセル
    if ([3].includes(index)) {
      additionalStyles.borderLeftWidth = 2;
      additionalStyles.borderLeftColor = 'blue';
    }
    // 右線：青色、2ピクセル
    if ([11].includes(index)) {
      additionalStyles.borderRightWidth = 2;
      additionalStyles.borderRightColor = 'blue';
    }

    // 左線_0.2, 左線の特別なケースも含む
    if ([0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
      additionalStyles.borderLeftWidth = 0.2;

      if ([5].includes(index)) {
        additionalStyles.borderLeftWidth = 2.0;
      }

      if ([9, 10].includes(index)) {
        additionalStyles.borderLeftWidth = 1.5;
      }
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
    width: '8.15%',
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

export default Danm3;
