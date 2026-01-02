import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContext22 } from '../../../Boin1/VideoContext/VC_22';
import { VideoContext as VideoContext82 } from '../../../Boin1/VideoContext/VC_82';
import { useBlink } from '../../../Boin1/VideoContext/blink_C2';

const Cell02 = () => {

  // VideoContext 使用
  const { showVideo: showVideo22 } = useContext(VideoContext22);
  const { showVideo: showVideo82 } = useContext(VideoContext82);

  // seBlink 使用
  const { blink, showBackground } = useBlink(showVideo22 || showVideo82);
  const [fontSize, setFontSize] = useState(10);

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 2) {
      setFontSize(8);
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      {/* 点滅と背景色の表示 */}
      {blink && !showBackground && <View style={styles.blinkOverlay} />}
      {showBackground && <View style={styles.overlay} />}

      {/* テキストの表示 */}
      <View style={styles.grayBackground} />
      <Text
        style={[styles.text, { fontSize, fontWeight: 'bold', textAlign: 'center' }]}
        onLayout={onTextLayout}
        numberOfLines={2}
        ellipsizeMode='tail'
      >
        硬音{'\n'}(短音)
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // grayBackgroundより上に来るように
  },
  text: {},
  grayBackground: {
    width: '90%',
    height: '70%',
    backgroundColor: 'rgba(20, 100, 255, 0.15)',
    position: 'absolute',
    zIndex: 0, // textContainerより下に来るように
  },
  blinkOverlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 3, // 他の要素よりも高い zIndex
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 2, // 点滅オーバーレイの下、他の要素の上に来る zIndex
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
  },
});

export default Cell02;
