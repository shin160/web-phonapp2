import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContext11 } from '../../../Boin1/VideoContext/VC_11';
import { VideoContext as VideoContext12 } from '../../../Boin1/VideoContext/VC_12';
import { VideoContext as VideoContext13 } from '../../../Boin1/VideoContext/VC_13';
import { VideoContext as VideoContext14 } from '../../../Boin1/VideoContext/VC_14';

import { useBlink_K2 } from '../../../Boin1/VideoContext/blink_K2';

const Cell04 = () => {
  // VideoContext を使用
  const { showVideo: showVideo11 } = useContext(VideoContext11);
  const { showVideo: showVideo12 } = useContext(VideoContext12);
  const { showVideo: showVideo13 } = useContext(VideoContext13);
  const { showVideo: showVideo14 } = useContext(VideoContext14);

  // コンテキストで useBlink使用
  const { blink, showBackground } = useBlink_K2(showVideo11 || showVideo12 || showVideo13 || showVideo14);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/DanmB_51.png')}
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

export default Cell04;
