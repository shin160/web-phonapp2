import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContextK } from '../../../Shiin1/VideoContext/VC-K';
import { VideoContext as VideoContextG } from '../../../Shiin1/VideoContext/VC-G';
import { VideoContext as VideoContextNG } from '../../../Shiin1/VideoContext/VC_NG';

import { useBlink } from '../../../Shiin1/VideoContext/blink_K1';

const Cell10 = ({ showImage = true }) => {
  const { showVideo: showVideoK } = useContext(VideoContextK);
  const { showVideo: showVideoG } = useContext(VideoContextG);
  const { showVideo: showVideoNG } = useContext(VideoContextNG);

  const { blink, showBackground } = useBlink(showVideoK || showVideoG || showVideoNG);

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Image
          source={require('../DanmPict/Danm_48.png')}
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

export default Cell10;
