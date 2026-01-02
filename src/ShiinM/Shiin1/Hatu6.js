import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

// セルのコンポーネントをインポート
import Cell00 from './Cell/Hatu6/0_0';
import Cell01 from './Cell/Hatu6/0_1';
import Cell02 from './Cell/Hatu6/0_2';
import Cell03 from './Cell/Hatu6/0_3';
import Cell04 from './Cell/Hatu6/0_4';
import Cell05 from './Cell/Hatu6/0_5';
import Cell06 from './Cell/Hatu6/0_6';
import Cell07 from './Cell/Hatu6/0_7';
import Cell08 from './Cell/Hatu6/0_8';
import Cell09 from './Cell/Hatu6/0_9';
import Cell010 from './Cell/Hatu6/0_10';
import Cell011 from './Cell/Hatu6/0_11';
import Cell012 from './Cell/Hatu6/0_12';

import Cell10 from './Cell/Hatu6/1_0';
import Cell11 from './Cell/Hatu6/1_1';
import Cell12 from './Cell/Hatu6/1_2';
import Cell13 from './Cell/Hatu6/1_3';
import Cell14 from './Cell/Hatu6/1_4';
import Cell15 from './Cell/Hatu6/1_5';
import Cell16 from './Cell/Hatu6/1_6';
import Cell17 from './Cell/Hatu6/1_7';
import Cell18 from './Cell/Hatu6/1_8';
import Cell19 from './Cell/Hatu6/1_9';
import Cell110 from './Cell/Hatu6/1_10';
import Cell111 from './Cell/Hatu6/1_11';
import Cell112 from './Cell/Hatu6/1_12';

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

  '1-0': Cell10,
  '1-1': Cell11,
  '1-2': Cell12,
  '1-3': Cell13,
  '1-4': Cell14,
  '1-5': Cell15,
  '1-6': Cell16,
  '1-7': Cell17,
  '1-8': Cell18,
  '1-9': Cell19,
  '1-10': Cell110,
  '1-11': Cell111,
  '1-12': Cell112,
};



const Hatu6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSpace} />
      <View style={styles.chartArea}>
        <View style={styles.row}>
          {Array(13).fill(null).map((_, index) => (
            <CellWrapper key={index} index={index} type='0-' />
          ))}
        </View>
        <View style={styles.row}>
          {Array(12).fill(null).map((_, index) => (
            <CellWrapper key={index} index={index} type='1-' />
          ))}
        </View>
      </View>
      <View style={styles.rightSpace} />
    </View>
  );
};

const CellWrapper = ({ index, type }) => {
  let specialStyle = {};



  // '0-3' のセル
  if (type === '0-' && index === 3) {
    specialStyle = { width: '1.5%' }; // 1.5% の特別な幅
  }

  // '1-0' のセル
  else if (type === '1-' && index === 0) {
    specialStyle = { width: '16.3%' }; // 16.3% の特別な幅
  }

  // '1-1' のセル
  else if (type === '1-' && index === 1) {
    specialStyle = { width: '8.0%' }; // 8.05% の特別な幅
  }

  // '1-2' のセル
  else if (type === '1-' && index === 2) {
    specialStyle = { width: '1.7%' };
  }

  // '1-3' のセル
  else if (type === '1-' && index === 3) {
    specialStyle = { width: '8.1%' };
  }

  return (
    <View key={index} style={[styles.cell, specialStyle]}>
      <CellContent index={index} componentKey={`${type}${index}`} />
    </View>
  );
};


const CellContent = ({ index, componentKey }) => {
  const Component = cellComponents[componentKey];

  let cellContentStyles = { ...styles.cellContent };
  let additionalStyles = {};

  // '0-'componentKeyスタイル
  if (componentKey.startsWith('0-')) {

    // 背景色：背景グレー色を消去
    if (![0, 1, 3, 5, 6, 8, 9, 10, 12].includes(index)) {
      cellContentStyles = { ...cellContentStyles, backgroundColor: '#f5f5f5' };
    }
    // 線：太さ
    // 上線_1.0
    if ([2, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
      additionalStyles.borderTopWidth = 1.0;
    }
    // 上線_0.2
    if ([0, 1].includes(index)) {
      additionalStyles.borderTopWidth = 0.2;
      additionalStyles.borderTopColor = 'gray';
    }
    // 右線_0.5
    if ([2, 12].includes(index)) {
      additionalStyles.borderRightWidth = 0.5;
    }
    // 左線_0.5, 左線の特別なケースも含む
    if ([0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
      additionalStyles.borderLeftWidth = 0.5;
      if ([2].includes(index)) {
        additionalStyles.borderLeftWidth = 1.0;
      }
      if ([6].includes(index)) {
        additionalStyles.borderLeftWidth = 2.0;
      }
      if ([10, 11].includes(index)) {
        additionalStyles.borderLeftWidth = 1.5;
      }
    }

    // 線：色・太さ

    // 0-4左線：青色、2ピクセル

    if ([4].includes(index)) {

      additionalStyles.borderLeftWidth = 2;
      additionalStyles.borderLeftColor = 'blue';
    }
    // 0-12右線：青色、2ピクセル
    if ([12].includes(index)) {
      additionalStyles.borderRightWidth = 2;
      additionalStyles.borderRightColor = 'blue';
    }
  }


  // '1-'componentKeyスタイルの設定とその他の線設定
  if (componentKey.startsWith('1-')) {

    // 背景色：0-2背景色の消去
    if (![0, 2, 4, 5, 7, 8, 9, 11, 12].includes(index)) {
      cellContentStyles = { ...cellContentStyles, backgroundColor: '#a9a9a9' };
    }

    // 線：太さ
    // 上線_0.5
    if ([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
      additionalStyles.borderTopWidth = 0.3;
    }
    // 下線_0.5
    if ([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
      additionalStyles.borderBottomWidth = 0.5;
    }

    // 左線_0.5, 左線の特別なケースも含む
    if ([0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
      additionalStyles.borderLeftWidth = 0.5;
      if ([1].includes(index)) {
        additionalStyles.borderLeftWidth = 1.0;
      }
      if ([5].includes(index)) {
        additionalStyles.borderLeftWidth = 2.0;
      }
      if ([9, 10].includes(index)) {
        additionalStyles.borderLeftWidth = 1.5;
      }
    }

    // 線：色・太さ
    // 下線：青色、2ピクセル
    if ([4, 5, 6, 7, 8, 9, 10].includes(index)) {
      additionalStyles.borderBottomWidth = 2;
      additionalStyles.borderBottomColor = 'blue';
    }
    // 左線：青色、2ピクセル
    if ([3].includes(index)) {
      additionalStyles.borderLeftWidth = 2;
      additionalStyles.borderLeftColor = 'blue';
      additionalStyles.borderBottomWidth = 2;
      additionalStyles.borderBottomColor = 'blue';
    }
    // 右線：青色、2ピクセル
    if ([11].includes(index)) {
      additionalStyles.borderRightWidth = 2;
      additionalStyles.borderRightColor = 'blue';
      additionalStyles.borderBottomWidth = 2;
      additionalStyles.borderBottomColor = 'blue';
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
    flex: 1, // 各行がchartAreaの半分の高さを占めるようにする
  },
  cell: {
    width: '8.15%',
    height: '100%',
    flexDirection: 'column',
    borderWidth: 0,
  },
  specialCell: {
    width: '1.5%', // セル幅：スペース
  },
  extraSpecialCell: {
    width: '16.3%', // '1-0' セル幅：2セル分
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

export default Hatu6;
