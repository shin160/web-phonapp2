
import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const Cell08 = () => (
  <View style={styles.container}>
    <Text style={styles.text}>s</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
  },
});

export default Cell08;
