import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext を各インポート
import { VideoContext as VideoContextP } from '../../../Shiin1/VideoContext/VC-P';
import { VideoContext as VideoContextT } from '../../../Shiin1/VideoContext/VC-T';
import { VideoContext as VideoContextK } from '../../../Shiin1/VideoContext/VC-K';

import { useBlink } from '../../../Shiin1/VideoContext/blink_S1';

const Cell02 = () => {
  // 各 VideoContext を使用
  const { showVideo: showVideoP } = useContext(VideoContextP);
  const { showVideo: showVideoT } = useContext(VideoContextT);
  const { showVideo: showVideoK } = useContext(VideoContextK);

  // 各コンテキストで useBlink を使用
  const { blink, showBackground } = useBlink(showVideoP || showVideoT || showVideoK);
  const fontSize = 12;

  return (
    <TouchableOpacity style={styles.container}>
      {/* 点滅と背景色の表示 */}
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}

      {/* テキストの表示 */}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize, fontWeight: 'bold' }]}>
        無
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

export default Cell02;
