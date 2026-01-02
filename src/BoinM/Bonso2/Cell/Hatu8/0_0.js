import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContextJu2 } from '../../../Bonso2/VideoContext/VC_Ju2';

import { useBlink } from '../../../Bonso2/VideoContext/blink_C1';

const Cell00 = () => {
  const { showVideo: showVideoJu2 } = useContext(VideoContextJu2);

  const { blink, showBackground } = useBlink(showVideoJu2);

  const fontSize = 12; // フォントサイズを固定

  return (
    <TouchableOpacity style={styles.container}>
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize }]}>
        弱母音
        {'\n'}
        (硬音)
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    position: 'absolute',
    zIndex: 2, // テキストを最前面に表示
  },
  grayBackground: {
    width: '90%',
    height: '90%',
    backgroundColor: 'rgba(0, 128, 128, 0.1)',
    position: 'absolute',
  },
  blinkOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
});

export default Cell00;
