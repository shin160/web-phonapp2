// Footer.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const screenHeight = Dimensions.get('window').height;
const footerHeight = screenHeight * 0.04;

const Footer = ({ onLoginPress }) => { // 新しく追加されたプロップスを受け取る
    return (
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={onLoginPress}> // Login.jsを表示するための関数を呼び出す
                <Image
                    source={require('./Footer/LogP.png')}
                    style={styles.loginIcon}
                />
            </TouchableOpacity>
            <Text style={styles.footerText}>© 2018 Phoneme Council</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footerContainer: {
        height: footerHeight,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'space-between', // アイコンとテキストを両端に配置
        flexDirection: 'row', // 横並びにする
        paddingHorizontal: 10, // 左右のpaddingを設定
    },
    footerText: {
        fontSize: 16,
    },
    loginIcon: {
        width: 30, // 適切なサイズに調整
        height: 30, // 適切なサイズに調整
    },
});

export default Footer;
