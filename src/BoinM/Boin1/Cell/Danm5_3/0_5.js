import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContext61 } from '../../../Boin1/VideoContext/VC_61';
import { VideoContext as VideoContext62 } from '../../../Boin1/VideoContext/VC_62';
import { VideoContext as VideoContext63 } from '../../../Boin1/VideoContext/VC_63';
import { useBlink_K2 } from '../../../Boin1/VideoContext/blink_K2';

const Cell05 = () => {
  // VideoContext 使用
  const { showVideo: showVideo61 } = useContext(VideoContext61);
  const { showVideo: showVideo62 } = useContext(VideoContext62);
  const { showVideo: showVideo63 } = useContext(VideoContext63);

  // useBlink 使用
  const { blink, showBackground } = useBlink_K2(showVideo61 || showVideo62 || showVideo63);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/DanmB_60.png')}
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
