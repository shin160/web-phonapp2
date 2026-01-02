import React, { useState } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

import { useVideoContext } from '../../../Bonso2/VideoContext/VC_SOR';
import { useBlink } from '../../../Bonso2/VideoContext/blink_P';

const Cell05 = () => {
  const { onPlayVideo } = useVideoContext();
  const [showVideo, setShowVideo] = useState(false);
  const { blink, showBackground } = useBlink(showVideo);

  const handlePress = () => {
    setShowVideo(true);
    onPlayVideo();

    // ビデオの表示状態を制御
    setTimeout(() => {
      setShowVideo(false);
    }, 43000);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        source={require('../HatuP/S_OR.png')}
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
    opacity: 0.5, // ここで透明度を設定
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

export default Cell05;

