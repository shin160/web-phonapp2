import React from 'react';
import { View, StyleSheet } from 'react-native';

// セルのコンポーネントをインポート
import Cell00 from './Cell/Hatu0/0_0';
import Cell01 from './Cell/Hatu0/0_1';
import Cell02 from './Cell/Hatu0/0_2';
import Cell03 from './Cell/Hatu0/0_3';
import Cell04 from './Cell/Hatu0/0_4';
import Cell05 from './Cell/Hatu0/0_5';
import Cell06 from './Cell/Hatu0/0_6';
import Cell07 from './Cell/Hatu0/0_7';
import Cell08 from './Cell/Hatu0/0_8';
import Cell09 from './Cell/Hatu0/0_9';
import Cell010 from './Cell/Hatu0/0_10';
import Cell011 from './Cell/Hatu0/0_11';
import Cell012 from './Cell/Hatu0/0_12';

import Cell10 from './Cell/Hatu0/1_0';
import Cell11 from './Cell/Hatu0/1_1';
import Cell12 from './Cell/Hatu0/1_2';
import Cell13 from './Cell/Hatu0/1_3';
import Cell14 from './Cell/Hatu0/1_4';
import Cell15 from './Cell/Hatu0/1_5';
import Cell16 from './Cell/Hatu0/1_6';
import Cell17 from './Cell/Hatu0/1_7';
import Cell18 from './Cell/Hatu0/1_8';
import Cell19 from './Cell/Hatu0/1_9';
import Cell110 from './Cell/Hatu0/1_10';
import Cell111 from './Cell/Hatu0/1_11';
import Cell112 from './Cell/Hatu0/1_12';

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



const Hatu0 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftSpace} />
            <View style={styles.chartArea}>
                <View style={styles.row}>
                    {Array(12).fill(null).map((_, index) => (
                        <CellWrapper key={index} index={index} type='1-' />
                    ))}
                </View>
                <View style={styles.row}>
                    {Array(8).fill(null).map((_, index) => (
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

    // '0-'(下段)
    if (type === '0-' && (index >= 0 && index <= 2)) {
        specialStyle = { backgroundColor: '#f5f5f5' };
    } else if (type === '0-' && index === 3) {
        specialStyle = { width: '1.5%' };
    } else if (type === '0-' && index === 4) {
        specialStyle = { width: '16.3%', backgroundColor: 'rgba(0, 0, 255, 0.05)' };
    } else if (type === '0-' && index === 5) {
        specialStyle = { width: '32.6%', backgroundColor: 'rgba(255, 0, 0, 0.05)' };
    } else if (type === '0-' && index === 6) {
        specialStyle = { width: '8.15%', backgroundColor: 'rgba(255, 0, 0, 0.05)' };
    } else if (type === '0-' && index === 7) {
        specialStyle = { width: '16.3%', backgroundColor: 'rgba(255, 0, 0, 0.05)' };
    } // '1-'(上段)
    else if (type === '1-' && index === 0) {
        specialStyle = { width: '16.3%' };
    } else if (type === '1-' && index === 1) {
        specialStyle = { width: '8.0%' };
    } else if (type === '1-' && index === 2) {
        specialStyle = { width: '1.9%' };
    } else if (type === '1-' && index === 3) {
        specialStyle = { width: '7.9%' };
    }

    return (
        <View style={[styles.cell, specialStyle]}>
            <CellContent index={index} componentKey={`${type}${index}`} />
        </View>
    );
};


const CellContent = ({ index, componentKey }) => {
    const Component = cellComponents[componentKey];
    let cellContentStyles = styles.cellContent;
    let additionalStyles = {};

    // '0-'(下段)_線 他
    if (componentKey.startsWith('0-')) {
        // 上線_0.5
        if ([0, 1, 4, 5, 6, 7, 8].includes(index)) {
            additionalStyles.borderTopWidth = 0.5;
        }
        // 下線_0.5
        if ([0, 1, 2, 4, 5, 6, 7, 8].includes(index)) {
            additionalStyles.borderBottomWidth = 0.5;
        }
        // 右線_0.5
        if ([2, 7].includes(index)) {
            additionalStyles.borderRightWidth = 0.5;
        }
        // 左線_0.5, 左線の特別なケースも含む
        if ([0, 1, 2, 4, 5, 6, 7, 8].includes(index)) {
            additionalStyles.borderLeftWidth = 0.5;
            if ([2].includes(index)) {
                additionalStyles.borderLeftWidth = 1.0;
            }
            if ([5].includes(index)) {
                additionalStyles.borderLeftWidth = 2.0;
            }
            if ([6, 7].includes(index)) {
                additionalStyles.borderLeftWidth = 1.5;
            }
        }
    }


    // '1-'(上段)_線 他
    if (componentKey.startsWith('1-')) {
        // 背景色
        if (![2, 3, 4, 5, 6, 7, 8].includes(index)) {
            cellContentStyles = { ...cellContentStyles, backgroundColor: '#f5f5f5' };
        }
        // 上線_0.5
        if ([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
            additionalStyles.borderTopWidth = 0.5;
        }
        // 下線_0.5
        if ([0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].includes(index)) {
            additionalStyles.borderBottomWidth = 0.5;
        }
        // 右線_0.5
        if ([2, 11].includes(index)) {
            additionalStyles.borderRightWidth = 0.5;
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
        height: '103%',
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
        borderColor: 'black',
    },
});

export default Hatu0;
