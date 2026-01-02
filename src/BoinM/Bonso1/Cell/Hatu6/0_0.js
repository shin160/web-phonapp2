import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContextLAR } from '../../../Bonso1/VideoContext/VC_LAR';
import { VideoContext as VideoContextLER } from '../../../Bonso1/VideoContext/VC_LER';
import { VideoContext as VideoContextLIR } from '../../../Bonso1/VideoContext/VC_LIR';
import { VideoContext as VideoContextLUR } from '../../../Bonso1/VideoContext/VC_LUR';

import { useBlink } from '../../../Bonso1/VideoContext/blink_C1';

const Cell00 = () => {
  const { showVideo: showVideoLAR } = useContext(VideoContextLAR);
  const { showVideo: showVideoLER } = useContext(VideoContextLER);
  const { showVideo: showVideoLIR } = useContext(VideoContextLIR);
  const { showVideo: showVideoLUR } = useContext(VideoContextLUR);

  const { blink, showBackground } = useBlink(showVideoLAR || showVideoLER || showVideoLIR || showVideoLUR);

  const fontSize = 12; // フォントサイズを固定

  return (
    <TouchableOpacity style={styles.container}>
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize }]}>
        ｱﾙﾌｧﾍﾞｯﾄ
        {'\n'}
        読み + r音
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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
