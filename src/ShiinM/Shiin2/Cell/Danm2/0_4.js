import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContextF } from '../../../Shiin2/VideoContext/VC_F';
import { VideoContext as VideoContextV } from '../../../Shiin2/VideoContext/VC_V';

import { useBlink_K2 } from '../../../Shiin2/VideoContext/blink_K2';

const Cell04 = () => {
  // VideoContext を使用
  const { showVideo: showVideoF } = useContext(VideoContextF);
  const { showVideo: showVideoV } = useContext(VideoContextV);

  // コンテキストで useBlink使用
  const { blink, showBackground } = useBlink_K2(showVideoF || showVideoV);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/Danm_13.png')}
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

export default Cell04;
