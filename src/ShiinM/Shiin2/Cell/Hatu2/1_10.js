
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Cell110 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>-</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
  },
});

export default Cell110;
