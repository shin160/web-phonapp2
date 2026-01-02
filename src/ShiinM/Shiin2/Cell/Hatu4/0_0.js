import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// VC-P他から VideoContext を異名でインポート
import { VideoContext as VideoContextL } from '../../../Shiin2/VideoContext/VC_L';
import { VideoContext as VideoContextJ } from '../../../Shiin2/VideoContext/VC_J';
import { VideoContext as VideoContextR } from '../../../Shiin2/VideoContext/VC_R';
import { VideoContext as VideoContextW } from '../../../Shiin2/VideoContext/VC_W';
import { VideoContext as VideoContextM } from '../../../Shiin2/VideoContext/VC_M';
import { VideoContext as VideoContextN } from '../../../Shiin2/VideoContext/VC_N';
import { VideoContext as VideoContextNG } from '../../../Shiin2/VideoContext/VC_NG';



import { useBlink } from '../../../Shiin2/VideoContext/blink_C1';

const Cell00 = () => {
  // 各 VideoContext を使用
  const { showVideo: showVideoL } = useContext(VideoContextL);
  const { showVideo: showVideoJ } = useContext(VideoContextJ);
  const { showVideo: showVideoR } = useContext(VideoContextR);
  const { showVideo: showVideoW } = useContext(VideoContextW);
  const { showVideo: showVideoM } = useContext(VideoContextM);
  const { showVideo: showVideoN } = useContext(VideoContextN);
  const { showVideo: showVideoNG } = useContext(VideoContextNG);

  // いずれかのコンテキストで useBlink を使用
  const { blink, showBackground } = useBlink(showVideoL || showVideoJ || showVideoR || showVideoW || showVideoM || showVideoN || showVideoNG);
  const fontSize = 12;

  return (
    <TouchableOpacity style={styles.container}>
      {/* 点滅と背景色の表示 */}
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}

      {/* テキストの表示 */}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize, fontWeight: 'bold' }]}>
        無
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    position: 'absolute',
    zIndex: 2, // テキストを最前面に表示
  },
  grayBackground: {
    width: '70%',
    height: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
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

export default Cell00;
