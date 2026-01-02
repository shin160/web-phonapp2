import React, { useContext } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

// VideoContext 各インポート
import { VideoContext as VideoContextT } from '../../../Shiin1/VideoContext/VC-T';
import { VideoContext as VideoContextD } from '../../../Shiin1/VideoContext/VC-D';
import { VideoContext as VideoContextSH1 } from '../../../Shiin1/VideoContext/VC_SH1';
import { VideoContext as VideoContextSH2 } from '../../../Shiin1/VideoContext/VC_SH2';
import { VideoContext as VideoContextCH1 } from '../../../Shiin1/VideoContext/VC_CH1';
import { VideoContext as VideoContextCH2 } from '../../../Shiin1/VideoContext/VC_CH2';
import { VideoContext as VideoContextL } from '../../../Shiin1/VideoContext/VC_L';
import { VideoContext as VideoContextN } from '../../../Shiin1/VideoContext/VC_N';

import { useBlink } from '../../../Shiin1/VideoContext/blink_K1';

const Cell06 = ({ showImage = true }) => {
  // 各VideoContext を使用
  const { showVideo: showVideoT } = useContext(VideoContextT);
  const { showVideo: showVideoD } = useContext(VideoContextD);
  const { showVideo: showVideoSH1 } = useContext(VideoContextSH1);
  const { showVideo: showVideoSH2 } = useContext(VideoContextSH2);
  const { showVideo: showVideoCH1 } = useContext(VideoContextCH1);
  const { showVideo: showVideoCH2 } = useContext(VideoContextCH2);
  const { showVideo: showVideoL } = useContext(VideoContextL);
  const { showVideo: showVideoN } = useContext(VideoContextN);

  // 各コンテキストで useBlink_K2 を使用
  const { blink, showBackground } = useBlink(showVideoT || showVideoD || showVideoSH1 || showVideoSH2 || showVideoCH1 || showVideoCH2 || showVideoL || showVideoN);
  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Image
          source={require('../DanmPict/Danm_44.png')}
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

export default Cell06;
