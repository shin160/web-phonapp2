import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell07 = () => {
  const [fontSize, setFontSize] = useState(12); // 初期フォントサイズ

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(10); // フォントサイズを10に設定
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.grayBackground} />
      <Text
        style={[styles.text, { fontSize, fontWeight: 'bold' }]}
        onLayout={onTextLayout}
      >
        -
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  text: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0, // セルの底辺に配置
  },
});

export default Cell07;
