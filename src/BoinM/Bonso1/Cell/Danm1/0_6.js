import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { VideoContext as VideoContextSU } from '../../../Bonso1/VideoContext/VC_SU';
import { VideoContext as VideoContextLU } from '../../../Bonso1/VideoContext/VC_LU';
import { VideoContext as VideoContextJu1 } from '../../../Bonso1/VideoContext/VC_Ju1';
import { VideoContext as VideoContextJu2 } from '../../../Bonso1/VideoContext/VC_Ju2';

import { useBlink } from '../../../Bonso1/VideoContext/blink_K1';

const Cell06 = ({ showImage = true }) => {
  const { showVideo: showVideoSU } = useContext(VideoContextSU);
  const { showVideo: showVideoLU } = useContext(VideoContextLU);
  const { showVideo: showVideoJu1 } = useContext(VideoContextJu1);
  const { showVideo: showVideoJu2 } = useContext(VideoContextJu2);

  const { blink, showBackground } = useBlink(showVideoSU || showVideoLU || showVideoJu1 || showVideoJu2);

  const [fontSize, setFontSize] = useState(18);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(16);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Text style={[styles.text, { fontSize }]} onTextLayout={onTextLayout}>u</Text>
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

export default Cell06;
