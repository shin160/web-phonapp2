import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContext91 } from '../../../Boin1/VideoContext/VC_91';
import { VideoContext as VideoContext92 } from '../../../Boin1/VideoContext/VC_92';
import { VideoContext as VideoContext93 } from '../../../Boin1/VideoContext/VC_93';
import { useBlink_K2 } from '../../../Boin1/VideoContext/blink_K2';

const Cell06 = () => {
  // VideoContext 使用
  const { showVideo: showVideo91 } = useContext(VideoContext91);
  const { showVideo: showVideo92 } = useContext(VideoContext92);
  const { showVideo: showVideo93 } = useContext(VideoContext93);

  // useBlink 使用
  const { blink, showBackground } = useBlink_K2(showVideo91 || showVideo92 || showVideo93);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/DanmB_61.png')}
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
