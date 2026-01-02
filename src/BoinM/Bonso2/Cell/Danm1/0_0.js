import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell00 = () => {
  const [fontSize, setFontSize] = useState(12); // 初期フォントサイズ

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(10); // フォントサイズを10に設定
    }
  };

  return (
    <View style={styles.container}>
      { }
      <Text style={[styles.text, { fontSize }]} onLayout={onTextLayout}>
        母音字
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    textAlign: 'left', // テキストを左寄せに設定
  }
});

export default Cell00;
