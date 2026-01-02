import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height; // 画面の高さを取得
const footerHeight = screenHeight * 0.04; // 全体の5%

const Footer = () => {
    return (
        <View style={styles.footerContainer}>
            <Text style={styles.footerText}>© 2018 Phoneme Council</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        height: footerHeight, // フッターの高さを設定
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 16,
    },
});

export default Footer;
