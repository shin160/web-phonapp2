// App.js
import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  Pressable,
  Linking,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

// ★ 追加：Firebase匿名認証
import { getAuth, signInAnonymously } from 'firebase/auth';
import app from './src/firebaseConfig'; // ←あなたの firebaseConfig.js の export default app を使う

import Header from './src/Header';
import Footer from './src/Footer';
import Shiin1 from './src/ShiinM/Shiin1';
import Shiin2 from './src/ShiinM/Shiin2';
import Boin1 from './src/BoinM/Boin1';
import Bonso1 from './src/BoinM/Bonso1';
import Bonso2 from './src/BoinM/Bonso2';

// ★ GitHub Pages 公開URL（そのまま使用）
const APP_URL = 'https://shin160.github.io/web-phonapp2/';

// ================================
// Webブラウザ専用：案内ページ（QR付き）
// ================================
const WebLanding = () => {
  return (
    <View style={landingStyles.wrap}>
      <Text style={landingStyles.title}>
        スマートフォンで開いてください
      </Text>

      <Text style={landingStyles.desc}>
        このページはPCブラウザ用の案内画面です。
        {'\n'}
        下のQRコード、またはリンクから
        スマートフォンでアクセスしてください。
      </Text>

      {/* ★ QRコード */}
      <View style={landingStyles.qrBox}>
        <QRCode
          value={APP_URL}
          size={220}
        />
      </View>

      {/* ★ リンク */}
      <Pressable
        style={landingStyles.btn}
        onPress={() => Linking.openURL(APP_URL)}
      >
        <Text style={landingStyles.btnText}>
          スマホで開く（リンク）
        </Text>
      </Pressable>

      <Text style={landingStyles.small}>
        {APP_URL}
      </Text>
    </View>
  );
};

// ================================
// アプリ本体
// ================================
const App = () => {
  // ★ Webは案内ページのみ表示（Firebase認証も不要）
  if (Platform.OS === 'web') {
    return <WebLanding />;
  }

  // ★ 追加：スマホ起動時に匿名認証（1回）
  useEffect(() => {
    const run = async () => {
      try {
        const auth = getAuth(app);
        if (!auth.currentUser) {
          await signInAnonymously(auth);
        }
      } catch (e) {
        console.error('Anonymous sign-in failed:', e);
      }
    };
    run();
  }, []);

  // ★ スマホは今まで通り
  const [selectedTab, setSelectedTab] = useState('Shiin1');

  const renderContent = () => {
    switch (selectedTab) {
      case 'Shiin1':
        return <Shiin1 />;
      case 'Shiin2':
        return <Shiin2 />;
      case 'Boin1':
        return <Boin1 />;
      case 'Bonso1':
        return <Bonso1 />;
      case 'Bonso2':
        return <Bonso2 />;
      default:
        return <View />;
    }
  };

  return (
    <View style={styles.container}>
      <Header onTabSelect={setSelectedTab} />
      <View style={styles.content}>
        {renderContent()}
      </View>
      <Footer />
    </View>
  );
};

// ================================
// styles
// ================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: '100%',
  },
  content: {
    flex: 1,
  },
});

const landingStyles = StyleSheet.create({
  wrap: {
    flex: 1,
    width: '100%',
    minHeight: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    opacity: 0.85,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 20,
  },
  qrBox: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 20,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
  },
  small: {
    marginTop: 14,
    fontSize: 12,
    opacity: 0.7,
    textAlign: 'center',
  },
});

export default App;
