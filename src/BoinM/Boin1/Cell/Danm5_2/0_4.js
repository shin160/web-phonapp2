import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContext22 } from '../../../Boin1/VideoContext/VC_22';
import { VideoContext as VideoContext23 } from '../../../Boin1/VideoContext/VC_23';

import { useBlink_K2 } from '../../../Boin1/VideoContext/blink_K2';

const Cell04 = () => {
  // VideoContext を使用
  const { showVideo: showVideo22 } = useContext(VideoContext22);
  const { showVideo: showVideo23 } = useContext(VideoContext23);

  // コンテキストで useBlink使用
  const { blink, showBackground } = useBlink_K2(showVideo22 || showVideo23);

  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../DanmPict/DanmB_55.png')}
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
