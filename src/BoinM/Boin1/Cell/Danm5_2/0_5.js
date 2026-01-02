import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContext51 } from '../../../Boin1/VideoContext/VC_51';
import { VideoContext as VideoContext52 } from '../../../Boin1/VideoContext/VC_52';
import { VideoContext as VideoContext53 } from '../../../Boin1/VideoContext/VC_53';
import { VideoContext as VideoContext54 } from '../../../Boin1/VideoContext/VC_54';

import { useBlink_K2 } from '../../../Boin1/VideoContext/blink_K2';

const Cell05 = () => {
  // VideoContext を使用
  const { showVideo: showVideo51 } = useContext(VideoContext51);
  const { showVideo: showVideo52 } = useContext(VideoContext52);
  const { showVideo: showVideo53 } = useContext(VideoContext53);
  const { showVideo: showVideo54 } = useContext(VideoContext54);


  // コンテキストで useBlink使用
  const { blink, showBackground } = useBlink_K2(showVideo51 || showVideo52 || showVideo53 || showVideo54);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/DanmB_56.png')}
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

export default Cell05;
