import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cell04 = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../DanmPict/DanmB_71.png')}
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
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default Cell04;
