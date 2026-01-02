import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell010 = () => {
  const [fontSize, setFontSize] = useState(12); // 初期フォントサイズ

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(10); // もしテキストが1行を超えるなら、フォントサイズを小さく調整
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize, color: 'red' }]} onLayout={onTextLayout}>
        中舌
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
    // fontSize: 12, // これを動的に変更
  },
});

export default Cell010;
