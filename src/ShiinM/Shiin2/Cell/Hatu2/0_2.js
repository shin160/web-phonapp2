import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext を各インポート
import { VideoContext as VideoContextF } from '../../../Shiin2/VideoContext/VC_F';
import { VideoContext as VideoContextTH1 } from '../../../Shiin2/VideoContext/VC_TH1';
import { VideoContext as VideoContextSH1 } from '../../../Shiin2/VideoContext/VC_SH1';
import { VideoContext as VideoContextS } from '../../../Shiin2/VideoContext/VC_S';
import { VideoContext as VideoContextH } from '../../../Shiin2/VideoContext/VC_H';

import { useBlink } from '../../../Shiin2/VideoContext/blink_S1';

const Cell02 = () => {
  // 各 VideoContext を使用
  const { showVideo: showVideoF } = useContext(VideoContextF);
  const { showVideo: showVideoTH1 } = useContext(VideoContextTH1);
  const { showVideo: showVideoSH1 } = useContext(VideoContextSH1);
  const { showVideo: showVideoS } = useContext(VideoContextS);
  const { showVideo: showVideoH } = useContext(VideoContextH);

  // 各コンテキストで useBlink を使用
  const { blink, showBackground } = useBlink(showVideoF || showVideoTH1 || showVideoSH1 || showVideoS || showVideoH);
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
