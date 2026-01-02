import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContextJ } from '../../../Shiin1/VideoContext/VC_J';

import { useBlink_K2 } from '../../../Shiin1/VideoContext/blink_K2';

const Cell08 = () => {
  // 各VideoContext を使用
  const { showVideo: showVideoJ } = useContext(VideoContextJ);

  // 各コンテキストで useBlink_K2 を使用
  const { blink, showBackground } = useBlink_K2(showVideoJ);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/Danm_17.png')}
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

export default Cell08;
