import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { VideoContext as VideoContextDOO1 } from '../../../Bonso2/VideoContext/VC_DOO1';
import { VideoContext as VideoContextDOO2 } from '../../../Bonso2/VideoContext/VC_DOO2';
import { useBlink } from '../../../Bonso2/VideoContext/blink_K1';

const Cell09 = ({ showImage = true }) => {
  const { showVideo: showVideoDOO1 } = useContext(VideoContextDOO1);
  const { showVideo: showVideoDOO2 } = useContext(VideoContextDOO2);

  const { blink, showBackground } = useBlink(showVideoDOO1 || showVideoDOO2);

  const [fontSize, setFontSize] = useState(18);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(16);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Text style={[styles.text, { fontSize }]} onTextLayout={onTextLayout}>oo</Text>
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

export default Cell09;
