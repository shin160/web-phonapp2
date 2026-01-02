import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell02 = () => {
  const fontSize = 12;

  return (
    <View style={styles.container}>
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize, fontWeight: 'bold' }]}>
        無
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
  },
});

export default Cell02;
