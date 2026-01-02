import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContextSA } from '../../../Bonso2/VideoContext/VC_SA';
import { VideoContext as VideoContextSE } from '../../../Bonso2/VideoContext/VC_SE';
import { VideoContext as VideoContextSI } from '../../../Bonso2/VideoContext/VC_SI';
import { VideoContext as VideoContextSO } from '../../../Bonso2/VideoContext/VC_SO';
import { VideoContext as VideoContextSU } from '../../../Bonso2/VideoContext/VC_SU';
import { VideoContext as VideoContextDAU } from '../../../Bonso2/VideoContext/VC_DAU';
import { VideoContext as VideoContextDOO1 } from '../../../Bonso2/VideoContext/VC_DOO1';
import { VideoContext as VideoContextDOO2 } from '../../../Bonso2/VideoContext/VC_DOO2';
import { VideoContext as VideoContextDOU } from '../../../Bonso2/VideoContext/VC_DOU';
import { VideoContext as VideoContextDOI } from '../../../Bonso2/VideoContext/VC_DOI';
import { VideoContext as VideoContextSA2 } from '../../../Bonso2/VideoContext/VC_SA2';

import { useBlink } from '../../../Bonso2/VideoContext/blink_C1';

const Cell00 = () => {
  const { showVideo: showVideoSA } = useContext(VideoContextSA);
  const { showVideo: showVideoSE } = useContext(VideoContextSE);
  const { showVideo: showVideoSI } = useContext(VideoContextSI);
  const { showVideo: showVideoSO } = useContext(VideoContextSO);
  const { showVideo: showVideoSU } = useContext(VideoContextSU);
  const { showVideo: showVideoDAU } = useContext(VideoContextDAU);
  const { showVideo: showVideoDOO1 } = useContext(VideoContextDOO1);
  const { showVideo: showVideoDOO2 } = useContext(VideoContextDOO2);
  const { showVideo: showVideoDOU } = useContext(VideoContextDOU);
  const { showVideo: showVideoDOI } = useContext(VideoContextDOI);
  const { showVideo: showVideoSA2 } = useContext(VideoContextSA2);

  const { blink, showBackground } = useBlink(showVideoSA || showVideoSE || showVideoSI || showVideoSO || showVideoSU || showVideoDAU || showVideoDOO1 || showVideoDOO2 || showVideoDOU || showVideoDOI || showVideoSA2);
  const fontSize = 12;

  return (
    <TouchableOpacity style={styles.container}>
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}
      <View style={styles.grayBackground} />
      <Text style={[styles.text, { fontSize }]}>
        表音読み
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
    width: '90%',
    height: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
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
