import React, { useState } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

import { useVideoContext } from '../../../Bonso1/VideoContext/VC_DOI';
import { useBlink } from '../../../Bonso1/VideoContext/blink_P';

const Cell12 = () => {
  const { onPlayVideo } = useVideoContext();
  const [showVideo, setShowVideo] = useState(false);
  const { blink, showBackground } = useBlink(showVideo);

  const handlePress = () => {
    setShowVideo(true);
    onPlayVideo();

    // ビデオ表示を制御 →点滅
    setTimeout(() => {
      setShowVideo(false);
    }, 43000);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        source={require('../HatuP/D_OI.png')}
        style={styles.image}
        resizeMode="contain"
      />
      {blink && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  image: {
    width: '98%',
    height: '98%',
    position: 'absolute',
  },
  blinkOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.3)', // 点滅色
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255, 0, 0, 0.3)', // 背景色
  },
});

export default Cell12;
