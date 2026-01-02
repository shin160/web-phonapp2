import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ onTabSelect }) => {
    const [selectedTab, setSelectedTab] = useState('Shiin1');
    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
        onTabSelect(tab);
    };

    const isConsonantCategory = ['Shiin1', 'Shiin2'].includes(selectedTab);
    const isVowelCategory = ['Boin1', 'Bonso1', 'Bonso2'].includes(selectedTab);

    return (
        <View style={styles.headerContainer}>
            <View style={styles.categoryRow}>
                <View style={[
                    styles.category,
                    isConsonantCategory ? styles.selectedCategory : styles.unselectedCategory,
                    styles.consonantCategory
                ]}>
                    <Text style={[
                        styles.categoryText,
                        isConsonantCategory ? styles.selectedText : styles.unselectedText
                    ]}>子音</Text>
                </View>
                <View style={styles.divider} />
                <View style={[
                    styles.category,
                    isVowelCategory ? styles.selectedCategory : styles.unselectedCategory,
                    styles.vowelCategory
                ]}>
                    <Text style={[
                        styles.categoryText,
                        isVowelCategory ? styles.selectedText : styles.unselectedText
                    ]}>母音</Text>
                </View>
            </View>
            <View style={styles.tabRow}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={tab.key}
                        onPress={() => handleTabSelect(tab.key)}
                        style={[
                            styles.tab,
                            selectedTab === tab.key ? styles.selectedTab : styles.unselectedTab,
                            index < tabs.length - 1 && styles.tabBorder,
                        ]}
                    >
                        <Text style={[
                            styles.tabText,
                            selectedTab === tab.key && styles.selectedTabText // 重要: 条件式を使用してスタイルを適用
                        ]}>{tab.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );

};

const tabs = [
    { key: 'Shiin1', title: '音声解説' },
    { key: 'Shiin2', title: '音素練習' },
    { key: 'Boin1', title: '音声解説' },
    { key: 'Bonso1', title: '音素解説' },
    { key: 'Bonso2', title: '音素練習' },
];


const styles = StyleSheet.create({
    headerContainer: {
        marginTop: '7%', // 上部マージン設定
        backgroundColor: '#ddd',
    },
    categoryRow: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
    },

    // 上段タブのスタイル
    category: {
        paddingVertical: 10,
        borderTopWidth: 1, // 上線を追加
        borderRightWidth: 1, // 右線を追加
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    consonantCategory: {
        flex: 2, // 子音カテゴリーの幅を他の2倍にする
    },
    vowelCategory: {
        flex: 3, // 母音カテゴリーの幅を他の3倍にする
    },
    selectedCategory: {
        backgroundColor: '#fff', // 選択されているカテゴリーは白色
    },
    unselectedCategory: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // 選択されていないカテゴリーはライトグレー
    },
    categoryText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    selectedText: {
        color: '#000', // 選択されているテキストの色
    },
    unselectedText: {
        color: '#888', // 選択されていないテキストの色
    },


    // 下段タブのスタイル
    tabRow: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderColor: '#000',
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        borderBottomWidth: 0, // 下線を消す
        backgroundColor: '#f0f0f0', // ライトグレーの背景色
    },
    selectedTab: {
        backgroundColor: '#fff', // 選択されているタブは白色
    },
    unselectedTab: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // 選択されていないタブはライトグレー
    },
    tabBorder: {
        borderRightWidth: 0.3, // 右側の境界線の幅
    },

    tabText: {
        textAlign: 'center',
        color: '#888', // デフォルトのテキスト色は灰色
    },
    selectedTabText: {
        color: '#000', // 選択されているタブのテキスト色は黒
        fontWeight: 'bold',
    },
});

export default Header;
