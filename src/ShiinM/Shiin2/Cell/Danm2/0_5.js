import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContextTH1 } from '../../../Shiin2/VideoContext/VC_TH1';
import { VideoContext as VideoContextTH2 } from '../../../Shiin2/VideoContext/VC_TH2';

import { useBlink_K2 } from '../../../Shiin2/VideoContext/blink_K2';

const Cell05 = () => {
  // VideoContext を使用
  const { showVideo: showVideoTH1 } = useContext(VideoContextTH1);
  const { showVideo: showVideoTH2 } = useContext(VideoContextTH2);

  // コンテキストで useBlink使用
  const { blink, showBackground } = useBlink_K2(showVideoTH1 || showVideoTH2);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/Danm_14.png')}
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

export default Cell05;
