import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContext82 } from '../../../Boin1/VideoContext/VC_82';

import { useBlink_K2 } from '../../../Boin1/VideoContext/blink_K2';

const Cell06 = () => {
  // VideoContext を使用
  const { showVideo: showVideo51 } = useContext(VideoContext82);

  // コンテキストで useBlink使用
  const { blink, showBackground } = useBlink_K2(showVideo51);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/DanmB_57.png')}
        style={styles.image}
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

export default Cell06;
