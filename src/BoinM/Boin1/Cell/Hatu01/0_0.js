import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cell00 = () => {
  const [fontSize, setFontSize] = useState(10);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 2) {
      setFontSize(8);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.grayBackground} />
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            { fontSize, lineHeight: fontSize + 2, fontWeight: 'bold', textAlign: 'center' }, // lineHeightをfontSize + 2に設定
          ]}
          onLayout={onTextLayout}
          numberOfLines={2}
          ellipsizeMode='tail'
        >
          [1]{'\n'}構え
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {},
  grayBackground: {
    width: '90%',
    height: '70%',
    position: 'absolute',
    zIndex: 0,
  },
});

export default Cell00;
