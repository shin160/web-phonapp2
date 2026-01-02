import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContextSAR } from '../../../Bonso1/VideoContext/VC_SAR';
import { VideoContext as VideoContextOR } from '../../../Bonso1/VideoContext/VC_SOR';
import { VideoContext as VideoContextSUR } from '../../../Bonso1/VideoContext/VC_SUR';
import { VideoContext as VideoContextDOOR } from '../../../Bonso1/VideoContext/VC_DOOR';
import { VideoContext as VideoContextDOUR } from '../../../Bonso1/VideoContext/VC_DOUR';

import { useBlink } from '../../../Bonso1/VideoContext/blink_C1';

const Cell00 = () => {
  const { showVideo: showVideoSAR } = useContext(VideoContextSAR);
  const { showVideo: showVideoOR } = useContext(VideoContextOR);
  const { showVideo: showVideoSUR } = useContext(VideoContextSUR);
  const { showVideo: showVideoDOOR } = useContext(VideoContextDOOR);
  const { showVideo: showVideoDOUR } = useContext(VideoContextDOUR);

  const { blink, showBackground } = useBlink(showVideoSAR || showVideoOR || showVideoSUR || showVideoDOOR || showVideoDOUR);
  const fontSize = 12; // フォントサイズを固定

  return (
    <TouchableOpacity style={styles.container}>
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize }]}>
        表音読み
        {'\n'}
        + r音
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
