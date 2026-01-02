import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native';
import { useVideoContext } from '../../../Shiin2/VideoContext/VC-D';
import { useBlink } from '../../../Shiin2/VideoContext/blink_P';

const Cell16 = () => {
  const { onPlayVideo } = useVideoContext();
  const [showVideo, setShowVideo] = useState(false);
  const { blink, showBackground } = useBlink(showVideo);

  const handlePress = () => {
    setShowVideo(true);
    onPlayVideo();

    // 点滅終了時間
    setTimeout(() => {
      setShowVideo(false);
    }, 18000);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>d</Text>
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
    position: 'relative', // 子要素の絶対配置を有効
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'ergba(255, 0, 0, 1)',
    fontFamily: Platform.OS === 'ios' ? 'Times New Roman' : 'serif',
    position: 'absolute',
    zIndex: 2, // テキストの最前面表示
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
  blinkStatusText: {
    fontSize: 14,
    color: 'white',
    marginTop: 10,
  },
  videoContainer: {
    position: 'absolute',
    width: '103%',
    height: '103%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '79%',
    height: '53%',
    resizeMode: 'contain',
    position: 'absolute',
    top: '44%',
    left: '22%',
  },
});

export default Cell16;
