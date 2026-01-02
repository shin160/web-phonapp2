import React from 'react';
import { View, StyleSheet } from 'react-native';

// インポート：セルのコンポーネント
import Cell00 from './Cell/Danm4/0_0';
import Cell01 from './Cell/Danm4/0_1';
import Cell02 from './Cell/Danm4/0_2';
import Cell03 from './Cell/Danm4/0_3';
import Cell04 from './Cell/Danm4/0_4';
import Cell05 from './Cell/Danm4/0_5';
import Cell06 from './Cell/Danm4/0_6';
import Cell07 from './Cell/Danm4/0_7';
import Cell08 from './Cell/Danm4/0_8';
import Cell09 from './Cell/Danm4/0_9';
import Cell010 from './Cell/Danm4/0_10';
import Cell011 from './Cell/Danm4/0_11';
import Cell012 from './Cell/Danm4/0_12';

// マッピング：セルのコンポーネント
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


const Danm4 = () => {
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

  if (type === '0-' && index === 0) {
    specialStyle = { width: '3.15%' };
  } else if (type === '0-' && index === 1) {
    specialStyle = { width: '21.3%' };
  } else if (type === '0-' && index === 2) {
    specialStyle = { width: '1.5%' };
  } else if (type === '0-' && index === 3) {
    specialStyle = { width: '16.3%', backgroundColor: 'rgba(0, 0, 255, 0.05)' };
  } else if (type === '0-' && index === 4) {
    specialStyle = { width: '32.6%', backgroundColor: 'rgba(255, 0, 0, 0.05)' };
  } else if (type === '0-' && index === 5) {
    specialStyle = { width: '8.15%', backgroundColor: 'rgba(255, 0, 0, 0.05)' };
  } else if (type === '0-' && index === 6) {
    specialStyle = { width: '16.3%', backgroundColor: 'rgba(255, 0, 0, 0.05)' };
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

    // 上線_0.5
    if ([1, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(index)) {
      additionalStyles.borderTopWidth = 1.5;
    }

    // 左線：青色、2ピクセル
    if ([3].includes(index)) {
      additionalStyles.borderLeftWidth = 2;
      additionalStyles.borderLeftColor = 'blue';
    }
    // 右線：青色、2ピクセル
    if ([6].includes(index)) {
      additionalStyles.borderRightWidth = 2;
      additionalStyles.borderRightColor = 'blue';
    }

    // 左線_0.5, 左線の特別なケースも含む
    if ([0, 1, 2, 4, 5, 6, 7].includes(index)) {
      additionalStyles.borderLeftWidth = 0.5;


      if ([4].includes(index)) {
        additionalStyles.borderLeftWidth = 2.0;
      }

      if ([5, 6].includes(index)) {
        additionalStyles.borderLeftWidth = 1.5;
      }
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
    width: '8.15%',
    height: '100%',
    flexDirection: 'column',
    borderColor: 'black',
    borderWidth: 0,
  },
  specialCell: {
    width: '1.5%', // 一般の特別なセルの幅
  },
  extraSpecialCell: {
    width: '16.3%', // '1-0' セルの特別な幅
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

export default Danm4;
