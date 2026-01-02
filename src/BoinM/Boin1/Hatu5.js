import React from 'react';
import { View, StyleSheet } from 'react-native';

// インポート：セルのコンポーネント
import Cell00 from './Cell/Hatu5/0_0';
import Cell01 from './Cell/Hatu5/0_1';
import Cell02 from './Cell/Hatu5/0_2';
import Cell03 from './Cell/Hatu5/0_3';
import Cell04 from './Cell/Hatu5/0_4';
import Cell05 from './Cell/Hatu5/0_5';
import Cell06 from './Cell/Hatu5/0_6';
import Cell07 from './Cell/Hatu5/0_7';
import Cell08 from './Cell/Hatu5/0_8';
import Cell09 from './Cell/Hatu5/0_9';
import Cell010 from './Cell/Hatu5/0_10';

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
};


const Hatu5 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSpace} />
      <View style={styles.chartArea}>
        <View style={styles.row}>
          {Array(11).fill(null).map((_, index) => (
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

  // '0-0' のセル
  if (type === '0-' && index === 0) {
    specialStyle = {
      width: '6.45%',
    };
  }
  // '0-1' のセル
  if (type === '0-' && index === 1) {
    specialStyle = {
      width: '9.0%',
    };
  }
  // '0-2' のセル
  if (type === '0-' && index === 2) {
    specialStyle = {
      width: '9.0%',
    };
  }
  // '0-2
  // '0-3' のセル
  if (type === '0-' && index === 3) {
    specialStyle = { width: '1.5%' };
  }
  // '0-4 のセル
  if (type === '0-' && index === 4) {
    specialStyle = { width: '16.3%' };
  }
  // '0-12' のセル
  if (type === '0-' && index === 12) {
    specialStyle = { width: '9.55%' };
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
  let additionalStyles = {}; // additionalStyles をここで初期化
  let overlayColor = {};

  // '0-'componentKeyスタイル
  if (componentKey.startsWith('0-')) {
    // 背景色のオーバーレイ設定
    if (![0, 1, 2, 3, 4, 5, 6, 8, 10].includes(index)) {
      overlayColor.backgroundColor = 'rgba(20, 100, 255, 0.4)';
      overlayColor.width = '80%'; // オーバーレイの幅をセルの80%に設定
      overlayColor.height = '80%'; // オーバーレイの高さをセルの80%に設定
    }
    if (![0, 1, 2, 3, 4, 5, 6, 7, 9].includes(index)) {
      overlayColor.backgroundColor = 'rgba(20, 100, 255, 0.15)';
      overlayColor.width = '80%';
      overlayColor.height = '80%';
    }

    // 線：太さ
    // 上線_0.5
    if ([0, 1, 2].includes(index)) {
      additionalStyles.borderTopWidth = 0.5;
    }
    // 右線_0.5
    if ([3, 12].includes(index)) {
      additionalStyles.borderRightWidth = 0.5;
    }
    // 左線_0.5, 左線の特別なケースも含む
    if ([0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11].includes(index)) {
      additionalStyles.borderLeftWidth = 0.5;
      if ([1].includes(index)) {
        additionalStyles.borderLeftWidth = 1.0;
      }
      if ([7, 9].includes(index)) {
        additionalStyles.borderLeftWidth = 1.5;
      }
    }
    // ※) 2ピクセル(上：黒線、両端：赤線)
    // 上）
    if ([0, 1, 2, 6, 7, 8, 9].includes(index)) {
      additionalStyles.borderTopWidth = 2;
    }
    // 左）
    if ([5].includes(index)) {
      additionalStyles.borderLeftWidth = 2;
      additionalStyles.borderLeftColor = 'red';
      additionalStyles.borderTopWidth = 2;
    }
    // 右）
    if ([10].includes(index)) {
      additionalStyles.borderRightWidth = 2;
      additionalStyles.borderRightColor = 'red';
      additionalStyles.borderTopWidth = 2;
    }
  }

  return (
    <View style={[cellContentStyles, additionalStyles]}>
      {Component && <Component />}
      {overlayColor.backgroundColor && (
        <View style={[styles.overlay, overlayColor]} pointerEvents="none" />
      )}
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
    width: '9.5%',
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
  overlay: {
    position: 'absolute',
    top: '10%', // オーバーレイを中央に配置するために上から10%の位置に設定
    left: '10%', // オーバーレイを中央に配置するために左から10%の位置に設定
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Hatu5;
