// Login.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import firebase from '../../firebaseConfig';


const Login = ({ onClose }) => { // モーダルを閉じる関数をプロップスとして受け取る
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            onClose(); // ログイン後にモーダルを閉じる
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry // パスワードを隠す
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    // Login.js の続き
    container: {
        flex: 1,
        justifyContent: 'center', // 中央に要素を配置
        alignItems: 'center', // 中央に要素を配置
        padding: 20, // 内側の余白
    },
    input: {
        width: '100%', // 幅を親要素に合わせる
        marginVertical: 10, // 垂直方向のマージン
        padding: 15, // 内側の余白
        borderWidth: 1, // 枠線の太さ
        borderColor: 'grey', // 枠線の色
        borderRadius: 5, // 枠線の角を丸くする
    },
});

export default Login;

