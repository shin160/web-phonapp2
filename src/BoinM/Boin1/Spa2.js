import React from 'react';
import { View, StyleSheet } from 'react-native';

// セルのコンポーネントをインポート
import Cell00 from './Cell/Spa2/0_0';
import Cell01 from './Cell/Spa2/0_1';
import Cell02 from './Cell/Spa2/0_2';
import Cell03 from './Cell/Spa2/0_3';
import Cell04 from './Cell/Spa2/0_4';
import Cell05 from './Cell/Spa2/0_5';
import Cell06 from './Cell/Spa2/0_6';
import Cell07 from './Cell/Spa2/0_7';
import Cell08 from './Cell/Spa2/0_8';
import Cell09 from './Cell/Spa2/0_9';
import Cell010 from './Cell/Spa2/0_10';
import Cell011 from './Cell/Spa2/0_11';
import Cell012 from './Cell/Spa2/0_12';

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


const Spa2 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSpace} />
            <View style={styles.chartArea}>
                <View style={styles.row}>
                    {Array(13).fill(null).map((_, index) => (
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
        specialStyle = { width: '13.15%' };
    }

    // 03セル_スペース
    if (type === '0-' && index === 3) {
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

        // 上線_0.5
        if ([4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
            additionalStyles.borderTopWidth = 0.5;
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

export default Spa2;
