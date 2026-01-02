import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { VideoContext as VideoContextSAR } from '../../../Bonso2/VideoContext/VC_SAR';
import { VideoContext as VideoContextJa2 } from '../../../Bonso2/VideoContext/VC_Ja2';
import { VideoContext as VideoContextLAR } from '../../../Bonso2/VideoContext/VC_LAR';
import { useBlink } from '../../../Bonso2/VideoContext/blink_K1';

const Cell02 = ({ showImage = true }) => {
  const { showVideo: showVideoSAR } = useContext(VideoContextSAR);
  const { showVideo: showVideoJa2 } = useContext(VideoContextJa2);
  const { showVideo: showVideoLAR } = useContext(VideoContextLAR);

  const { blink, showBackground } = useBlink(showVideoSAR || showVideoJa2 || showVideoLAR);

  const [fontSize, setFontSize] = useState(18);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(16);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Text style={[styles.text, { fontSize }]} onTextLayout={onTextLayout}>ar</Text>
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
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto', // ゴシック体フォントに変更
    position: 'absolute',
    zIndex: 2,
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

export default Cell02;
