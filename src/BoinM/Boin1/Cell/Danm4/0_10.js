import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell10 = () => {
  const [fontSize, setFontSize] = useState(12); // 初期フォントサイズ

  const onTextLayout = (e) => {
    // もしe.nativeEventがundefinedでなく、linesプロパティを持っている場合にのみ処理を行う
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(10); // フォントサイズを10に設定
    }
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize }]} onLayout={onTextLayout}>
        空間
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
    // fontSizeプロパティは動的に設定されるのでここでは削除
  },
});

export default Cell10;
