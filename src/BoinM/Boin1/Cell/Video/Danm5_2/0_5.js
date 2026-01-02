import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cell05 = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../DanmPict/DanmB_56.png')}
        style={styles.image}
        resizeMode="contain"
      />
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
    fontSize: 12,
    zIndex: 1,
  },
  image: {
    width: '102%',
    height: '102%',
    position: 'absolute',
  },
});

export default Cell05;
