import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { VideoContext as VideoContextSUR } from '../../../Bonso1/VideoContext/VC_SUR';
import { VideoContext as VideoContextLUR } from '../../../Bonso1/VideoContext/VC_LUR';
import { useBlink } from '../../../Bonso1/VideoContext/blink_K1';

const Cell06 = ({ showImage = true }) => {
  const { showVideo: showVideoSUR } = useContext(VideoContextSUR);
  const { showVideo: showVideoLUR } = useContext(VideoContextLUR);

  const { blink, showBackground } = useBlink(showVideoSUR || showVideoLUR);

  const [fontSize, setFontSize] = useState(18);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(16);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Text style={[styles.text, { fontSize }]} onTextLayout={onTextLayout}>ur</Text>
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

export default Cell06;
