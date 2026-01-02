import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { VideoContext as VideoContextSI } from '../../../Bonso2/VideoContext/VC_SI';
import { VideoContext as VideoContextJi1 } from '../../../Bonso2/VideoContext/VC_Ji1';
import { VideoContext as VideoContextJi2 } from '../../../Bonso2/VideoContext/VC_Ji2';
import { VideoContext as VideoContextLI } from '../../../Bonso2/VideoContext/VC_LI';

import { useBlink } from '../../../Bonso2/VideoContext/blink_K1';

const Cell04 = ({ showImage = true }) => {
  const { showVideo: showVideoSI } = useContext(VideoContextSI);
  const { showVideo: showVideoJi1 } = useContext(VideoContextJi1);
  const { showVideo: showVideoJi2 } = useContext(VideoContextJi2);
  const { showVideo: showVideoLI } = useContext(VideoContextLI);

  const { blink, showBackground } = useBlink(showVideoSI || showVideoJi1 || showVideoJi2 || showVideoLI);

  const [fontSize, setFontSize] = useState(18);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(16);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Text style={[styles.text, { fontSize }]} onTextLayout={onTextLayout}>i</Text>
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

export default Cell04;
