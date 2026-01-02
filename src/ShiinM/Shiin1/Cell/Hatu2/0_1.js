import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext を各インポート
import { VideoContext as VideoContextF } from '../../../Shiin1/VideoContext/VC_F';
import { VideoContext as VideoContextTH1 } from '../../../Shiin1/VideoContext/VC_TH1';
import { VideoContext as VideoContextSH1 } from '../../../Shiin1/VideoContext/VC_SH1';
import { VideoContext as VideoContextS } from '../../../Shiin1/VideoContext/VC_S';
import { VideoContext as VideoContextH } from '../../../Shiin1/VideoContext/VC_H';

import { VideoContext as VideoContextV } from '../../../Shiin1/VideoContext/VC_V';
import { VideoContext as VideoContextTH2 } from '../../../Shiin1/VideoContext/VC_TH2';
import { VideoContext as VideoContextSH2 } from '../../../Shiin1/VideoContext/VC_SH2';
import { VideoContext as VideoContextZ } from '../../../Shiin1/VideoContext/VC_Z';

import { useBlink } from '../../../Shiin1/VideoContext/blink_C2';

const Cell01 = () => {
  // 各 VideoContext を使用
  const { showVideo: showVideoF } = useContext(VideoContextF);
  const { showVideo: showVideoTH1 } = useContext(VideoContextTH1);
  const { showVideo: showVideoSH1 } = useContext(VideoContextSH1);
  const { showVideo: showVideoS } = useContext(VideoContextS);
  const { showVideo: showVideoH } = useContext(VideoContextH);

  const { showVideo: showVideoV } = useContext(VideoContextV);
  const { showVideo: showVideoTH2 } = useContext(VideoContextTH2);
  const { showVideo: showVideoSH2 } = useContext(VideoContextSH2);
  const { showVideo: showVideoZ } = useContext(VideoContextZ);

  // 各コンテキストで useBlink を使用
  const { blink, showBackground } = useBlink(showVideoF || showVideoTH1 || showVideoSH1 || showVideoS || showVideoH || showVideoV || showVideoTH2 || showVideoSH2 || showVideoZ);
  const fontSize = 12;

  return (
    <TouchableOpacity style={styles.container}>
      {/* 点滅と背景色の表示 */}
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}

      {/* テキストの表示 */}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize, fontWeight: 'bold' }]}>
        通
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
    width: '70%',  // セルの大きさの7割
    height: '70%',  // セルの大きさの7割
    backgroundColor: 'rgba(0, 0, 0, 0.05)', // 背景色ライトグレー
    position: 'absolute', // 親コンテナ内での絶対位置
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

export default Cell01;
