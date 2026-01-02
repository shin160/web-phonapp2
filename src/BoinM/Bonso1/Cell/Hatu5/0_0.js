import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContextLA } from '../../../Bonso1/VideoContext/VC_LA';
import { VideoContext as VideoContextLE } from '../../../Bonso1/VideoContext/VC_LE';
import { VideoContext as VideoContextLI } from '../../../Bonso1/VideoContext/VC_LI';
import { VideoContext as VideoContextLO } from '../../../Bonso1/VideoContext/VC_LO';
import { VideoContext as VideoContextLU } from '../../../Bonso1/VideoContext/VC_LU';

import { useBlink } from '../../../Bonso1/VideoContext/blink_C1';

const Cell00 = () => {
  const { showVideo: showVideoLA } = useContext(VideoContextLA);
  const { showVideo: showVideoLE } = useContext(VideoContextLE);
  const { showVideo: showVideoLI } = useContext(VideoContextLI);
  const { showVideo: showVideoLO } = useContext(VideoContextLO);
  const { showVideo: showVideoLU } = useContext(VideoContextLU);

  const { blink, showBackground } = useBlink(showVideoLA || showVideoLE || showVideoLI || showVideoLO || showVideoLU);


  const fontSize = 12; // フォントサイズを固定

  return (
    <TouchableOpacity style={styles.container}>
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize }]}>
        ｱﾙﾌｧﾍﾞｯﾄ
        {'\n'}
        読み
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
