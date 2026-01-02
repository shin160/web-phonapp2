import React, { useState } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { useVideoContext } from '../../../Boin1/VideoContext/VC_12';
import { useBlink } from '../../../Boin1/VideoContext/blink_P';

const Cell06 = () => {
  const { onPlayVideo } = useVideoContext();
  const [showVideo, setShowVideo] = useState(false);
  const { blink, showBackground } = useBlink(showVideo); // useBlink フックを使用

  const handlePress = () => {
    setShowVideo(true);
    onPlayVideo();

    // 点滅を開始し終了
    setTimeout(() => {
      setShowVideo(false);
    }, 23000);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image
        source={require('../HatuP/B12.png')}
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
    width: '90%',
    height: '90%',
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

export default Cell06;
