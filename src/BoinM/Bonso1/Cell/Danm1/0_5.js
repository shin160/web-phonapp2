import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { VideoContext as VideoContextSO } from '../../../Bonso1/VideoContext/VC_SO';
import { VideoContext as VideoContextLO } from '../../../Bonso1/VideoContext/VC_LO';

import { useBlink } from '../../../Bonso1/VideoContext/blink_K1';

const Cell05 = ({ showImage = true }) => {
  const { showVideo: showVideoSO } = useContext(VideoContextSO);
  const { showVideo: showVideoLO } = useContext(VideoContextLO);

  const { blink, showBackground } = useBlink(showVideoSO || showVideoLO);

  const [fontSize, setFontSize] = useState(18);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(16);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Text style={[styles.text, { fontSize }]} onTextLayout={onTextLayout}>o</Text>
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
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
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

export default Cell05;
