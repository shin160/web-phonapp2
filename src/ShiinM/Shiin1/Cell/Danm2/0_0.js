import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell00 = ({ blink }) => {
  // 点滅状態の確認用ログ（デバッグが終わったら削除してください）
  useEffect(() => {
    console.log(`Blink status is now: ${blink}`);
  }, [blink]);

  return (
    <View style={[styles.container, blink ? styles.blinkOn : styles.blinkOff]}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // 点滅「オフ」のときのデフォルト背景色を設定
    backgroundColor: 'transparent', // または点滅させたい「オフ」の色
  },
  blinkOn: {
    backgroundColor: 'rgba(255, 0, 0, 0.5)', // 点滅「オン」の色
  },
  blinkOff: {
    // ここに点滅「オフ」のときのスタイルを追加（必要に応じて）
  },
});

export default Cell00;
