import React, { createContext, useContext, useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Video } from 'expo-av';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebaseConfig';

// VideoContext の作成
export const VideoContext = createContext({
  showVideo: false,
  onPlayVideo: () => {}
});

// useVideoContext フックの定義
export const useVideoContext = () => {
  return useContext(VideoContext);
};

// VideoProviderP コンポーネントの定義
export const VideoProviderP = ({ children }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [videoErr, setVideoErr] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const path = 'shiinT/c1/T_p.mp4';
        console.log('✅ [VC-P] fetchVideo start');
        console.log('✅ [VC-P] storage path =', path);

        const videoRef = ref(storage, path);
        const url = await getDownloadURL(videoRef);

        console.log('✅ [VC-P] downloadURL =', url);

        setVideoUrl(url);
        setVideoErr(null);
      } catch (e) {
        console.error('❌ [VC-P] getDownloadURL error =', e);
        setVideoErr(e?.message ?? String(e));
        setVideoUrl(null);
      }
    };

    fetchVideo();
  }, []);

  useEffect(() => {
    console.log('ℹ️ [VC-P] videoUrl state =', videoUrl);
  }, [videoUrl]);

  const onPlayVideo = () => {
    console.log('▶️ [VC-P] onPlayVideo. showVideo = true, videoUrl =', videoUrl);
    setShowVideo(true);

    setTimeout(() => {
      console.log('⏹️ [VC-P] hide video (timeout)');
      setShowVideo(false);
    }, 15000);
  };

  return (
    <VideoContext.Provider value={{ showVideo, onPlayVideo }}>
      {children}

      {showVideo && (
        <View style={styles.videoContainer}>
          {!videoUrl ? (
            <Text style={styles.debugText}>
              videoUrl が null です。Console を確認してね。{'\n'}
              {videoErr ? `error: ${videoErr}` : ''}
            </Text>
          ) : (
            <Video
              source={{ uri: videoUrl }}
              rate={1.0}
              volume={1.0}
              isMuted={true}      // ★Webの自動再生対策（まずはミュートで確実に）
              resizeMode="cover"
              shouldPlay={true}
              isLooping={true}
              style={styles.video}
              useNativeControls={false}
              onError={(e) => console.error('❌ [VC-P] Video onError =', e)}
              onLoadStart={() => console.log('⏳ [VC-P] Video onLoadStart')}
              onLoad={() => console.log('✅ [VC-P] Video onLoad')}
              onReadyForDisplay={() => console.log('✅ [VC-P] Video onReadyForDisplay')}
            />
          )}
        </View>
      )}
    </VideoContext.Provider>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    position: 'absolute',
    width: '84%',
    height: '98%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '79%',
    height: '53%',
    resizeMode: 'contain',
    position: 'absolute',
    top: '45%',
    left: '34%',
  },
  debugText: {
    color: 'white',
    fontSize: 14,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
});
