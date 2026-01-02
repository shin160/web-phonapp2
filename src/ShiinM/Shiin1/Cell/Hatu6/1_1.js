import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// VC-B, VC-D, VC-G から VideoContext を異なる名前でインポート
import { VideoContext as VideoContextM } from '../../../Shiin1/VideoContext/VC_M';
import { VideoContext as VideoContextN } from '../../../Shiin1/VideoContext/VC_N';
import { VideoContext as VideoContextNG } from '../../../Shiin1/VideoContext/VC_NG';

import { useBlink } from '../../../Shiin1/VideoContext/blink_S1';

const Cell11 = () => {
  // 各 VideoContext を使用
  const { showVideo: showVideoM } = useContext(VideoContextM);
  const { showVideo: showVideoN } = useContext(VideoContextN);
  const { showVideo: showVideoNG } = useContext(VideoContextNG);

  // いずれかのコンテキストで useBlink を使用
  const { blink, showBackground } = useBlink(showVideoM || showVideoN || showVideoNG);
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

export default Cell11;
