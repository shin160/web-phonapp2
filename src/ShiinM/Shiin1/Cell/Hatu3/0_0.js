import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext を各インポート
import { VideoContext as VideoContextCH1 } from '../../../Shiin1/VideoContext/VC_CH1';
import { VideoContext as VideoContextCH2 } from '../../../Shiin1/VideoContext/VC_CH2';

import { useBlink } from '../../../Shiin1/VideoContext/blink_C1';

const Cell00 = () => {
  // 各 VideoContext を使用
  const { showVideo: showVideoCH1 } = useContext(VideoContextCH1);
  const { showVideo: showVideoCH2 } = useContext(VideoContextCH2);

  // 各コンテキストで useBlink を使用
  const { blink, showBackground } = useBlink(showVideoCH1 || showVideoCH2);
  const fontSize = 12;

  return (
    <TouchableOpacity style={styles.container}>
      {/* 点滅と背景色の表示 */}
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}

      {/* テキストの表示 */}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize, fontWeight: 'bold' }]}>
        有
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
    width: '70%',
    height: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
