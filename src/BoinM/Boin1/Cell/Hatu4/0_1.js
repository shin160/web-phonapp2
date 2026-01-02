import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { VideoContext as VideoContext23 } from '../../../Boin1/VideoContext/VC_23';
import { VideoContext as VideoContext53 } from '../../../Boin1/VideoContext/VC_53';
import { VideoContext as VideoContext54 } from '../../../Boin1/VideoContext/VC_54';
import { useBlink } from '../../../Boin1/VideoContext/blink_C1';

const Cell01 = () => {

  // 各 VideoContext 使用
  const { showVideo: showVideo23 } = useContext(VideoContext23);
  const { showVideo: showVideo53 } = useContext(VideoContext53);
  const { showVideo: showVideo54 } = useContext(VideoContext54);

  // useBlink 使用
  const { blink, showBackground } = useBlink(showVideo23 || showVideo53 || showVideo54);
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
