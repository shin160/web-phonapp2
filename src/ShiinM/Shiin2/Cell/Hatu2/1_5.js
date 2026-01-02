import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native';
import { useVideoContext } from '../../../Shiin2/VideoContext/VC_TH2';
import { useBlink } from '../../../Shiin2/VideoContext/blink_P';

const Cell15 = () => {
  const { onPlayVideo } = useVideoContext();
  const [showVideo, setShowVideo] = useState(false); // 動画表示状態の管理ステート
  const { blink, showBackground } = useBlink(showVideo);

  const handlePress = () => {
    setShowVideo(true); // 動画表示を開始
    onPlayVideo();

    // 一定時間後 → 動画表示・背景表示のリセット
    setTimeout(() => {
      setShowVideo(false);
    }, 35000);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>ð</Text>
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
    color: 'ergba(255, 0, 0, 1)dr',
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

export default Cell15;
