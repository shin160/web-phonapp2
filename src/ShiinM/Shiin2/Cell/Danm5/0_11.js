import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContextH } from '../../../Shiin2/VideoContext/VC_H';

import { useBlink } from '../../../Shiin2/VideoContext/blink_K1';

const Cell11 = ({ showImage = true }) => {
  // 各VideoContext を使用
  const { showVideo: showVideoH } = useContext(VideoContextH);

  // VC-T・VC-D のいずれかのコンテキストで useBlink を使用
  const { blink, showBackground } = useBlink(showVideoH);
  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Image
          source={require('../DanmPict/Danm_49.png')}
          style={blink ? styles.imageBlink : styles.image}
          resizeMode="contain"
        />
      )}
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

export default Cell11;
