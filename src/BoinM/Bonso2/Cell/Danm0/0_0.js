import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell00 = () => {
  const fontSize = 12; // フォントサイズを固定

  return (
    <View style={styles.container}>
      { }
      <Text style={[styles.text, { fontSize }]}>
        単・複
        {'\n'}
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
