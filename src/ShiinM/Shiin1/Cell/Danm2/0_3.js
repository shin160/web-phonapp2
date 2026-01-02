import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContextP } from '../../../Shiin1/VideoContext/VC-P';
import { VideoContext as VideoContextB } from '../../../Shiin1/VideoContext/VC-B';
import { VideoContext as VideoContextW } from '../../../Shiin1/VideoContext/VC_W';
import { VideoContext as VideoContextM } from '../../../Shiin1/VideoContext/VC_M';

import { useBlink_K2 } from '../../../Shiin1/VideoContext/blink_K2';

const Cell03 = () => {
  // VideoContext を使用
  const { showVideo: showVideoP } = useContext(VideoContextP);
  const { showVideo: showVideoB } = useContext(VideoContextB);
  const { showVideo: showVideoW } = useContext(VideoContextW);
  const { showVideo: showVideoM } = useContext(VideoContextM);

  // コンテキストで useBlink使用
  const { blink, showBackground } = useBlink_K2(showVideoP || showVideoB || showVideoW || showVideoM);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/Danm_12.png')}
        style={blink ? styles.imageBlink : styles.image}
        resizeMode="contain"
      />
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  imageBlink: {
    width: '100%',
    height: '100%',
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

export default Cell03;
