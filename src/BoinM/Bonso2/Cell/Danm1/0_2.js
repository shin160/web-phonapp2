import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { VideoContext as VideoContextSA } from '../../../Bonso2/VideoContext/VC_SA';
import { VideoContext as VideoContextSA2 } from '../../../Bonso2/VideoContext/VC_SA2';
import { VideoContext as VideoContextJa1 } from '../../../Bonso2/VideoContext/VC_Ja1';
import { VideoContext as VideoContextLA } from '../../../Bonso2/VideoContext/VC_LA';

import { useBlink } from '../../../Bonso2/VideoContext/blink_K1';

const Cell02 = ({ showImage = true }) => {
  const { showVideo: showVideoSA } = useContext(VideoContextSA);
  const { showVideo: showVideoSA2 } = useContext(VideoContextSA2);
  const { showVideo: showVideoJa1 } = useContext(VideoContextJa1);
  const { showVideo: showVideoLA } = useContext(VideoContextLA);

  const { blink, showBackground } = useBlink(showVideoSA || showVideoSA2 || showVideoJa1 || showVideoLA);

  const [fontSize, setFontSize] = useState(18);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 1) {
      setFontSize(16);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {showImage && (
        <Text style={[styles.text, { fontSize }]} onTextLayout={onTextLayout}>a</Text>
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
