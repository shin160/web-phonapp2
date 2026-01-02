import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContextF } from '../../../Shiin1/VideoContext/VC_F';
import { VideoContext as VideoContextV } from '../../../Shiin1/VideoContext/VC_V';

import { useBlink } from '../../../Shiin1/VideoContext/blink_K1';

const Cell04 = ({ showImage = true }) => {
  // VideoContext を使用
  const { showVideo: showVideoF } = useContext(VideoContextF);
  const { showVideo: showVideoV } = useContext(VideoContextV);

  // VC-P ・ VC-B → いずれかのコンテキストで useBlink使用
  const { blink, showBackground } = useBlink(showVideoF || showVideoV);

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Image
          source={require('../DanmPict/Danm_42.png')}
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

export default Cell04;
