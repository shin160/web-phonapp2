import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContext13 } from '../../../Boin1/VideoContext/VC_13';
import { VideoContext as VideoContext14 } from '../../../Boin1/VideoContext/VC_14';
import { VideoContext as VideoContext73 } from '../../../Boin1/VideoContext/VC_73';
import { VideoContext as VideoContext74 } from '../../../Boin1/VideoContext/VC_74';
import { useBlink } from '../../../Boin1/VideoContext/blink_C1';

const Cell01 = () => {

  // 各 VideoContext 使用
  const { showVideo: showVideo13 } = useContext(VideoContext13);
  const { showVideo: showVideo14 } = useContext(VideoContext14);
  const { showVideo: showVideo73 } = useContext(VideoContext73);
  const { showVideo: showVideo74 } = useContext(VideoContext74);

  // useBlink 使用
  const { blink, showBackground } = useBlink(showVideo13 || showVideo14 || showVideo73 || showVideo74);
  const [fontSize, setFontSize] = useState(10); // 初期フォントサイズを少し大きく

  const onTextLayout = (e) => {
    if (e.nativeEvent && e.nativeEvent.lines && e.nativeEvent.lines.length > 2) {
      setFontSize(8); // もしテキストが3行以上になる場合、fontSizeをさらに小さく
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
        軟音{'\n'}(短音)
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
  grayBackground: {
    width: '50%',
    height: '70%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    position: 'absolute',
    zIndex: 0, // textContainerより下に来るように
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

export default Cell01;
