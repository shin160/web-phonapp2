import React from 'react';
import { View, StyleSheet } from 'react-native';

// インポート：セルのコンポーネント
import Cell00 from './Cell/Hatu00/0_0';
import Cell01 from './Cell/Hatu00/0_1';
import Cell02 from './Cell/Hatu00/0_2';
import Cell03 from './Cell/Hatu00/0_3';
import Cell04 from './Cell/Hatu00/0_4';
import Cell05 from './Cell/Hatu00/0_5';
import Cell06 from './Cell/Hatu00/0_6';

// マッピング：セルのコンポーネント
const cellComponents = {
    '0-0': Cell00,
    '0-1': Cell01,
    '0-2': Cell02,
    '0-3': Cell03,
    '0-4': Cell04,
    '0-5': Cell05,
    '0-6': Cell06,
};


const Hatu00 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSpace} />
            <View style={styles.chartArea}>
                <View style={styles.row}>
                    {Array(5).fill(null).map((_, index) => (
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

    // セル_横幅
    if (type === '0-' && index === 0) {
        specialStyle = {
            width: '6.45%',
        };
    }
    if (type === '0-' && index === 1) {
        specialStyle = {
            width: '18.0%',
        };
    }
    if (type === '0-' && index === 2) {
        specialStyle = { width: '1.5%' };
    }
    if (type === '0-' && index === 3) {
        specialStyle = { width: '16.3%' };
    }
    if (type === '0-' && index === 4) {
        specialStyle = { width: '57.05%' };
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

    // '0-'componentKey_線
    if (componentKey.startsWith('0-')) {

        // 上線_0.5
        if ([0, 1, 3, 4].includes(index)) {
            additionalStyles.borderTopWidth = 0.5;
        }
        // 下線_0.5
        if ([1, 3, 4].includes(index)) {
            additionalStyles.borderBottomWidth = 0.5;
        }
        // 右線_0.5
        if ([4].includes(index)) {
            additionalStyles.borderRightWidth = 0.5;
        }
        // 左線_0.5, 左線の特別なケースも含む
        if ([0, 2, 3].includes(index)) {
            additionalStyles.borderLeftWidth = 0.5;
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

export default Hatu00;
