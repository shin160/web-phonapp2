import React, { createContext, useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebaseConfig';

// VideoContext の作成
export const VideoContext = createContext({
    showVideo: false,
    onPlayVideo: () => { }
});

// useVideoContext フックの定義
export const useVideoContext = () => {
    return useContext(VideoContext);
};

// VideoProvider〇 コンポーネントの定義
export const VideoProviderD = ({ children }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            const videoRef = ref(storage, 'shiinH/c1/V_d.mp4'); // 正しいパスを指定
            const url = await getDownloadURL(videoRef);
            setVideoUrl(url);
        };

        fetchVideo();
    }, []);

    const onPlayVideo = () => {
        setShowVideo(true);
        // ビデオ非表示に
        setTimeout(() => {
            setShowVideo(false);
        }, 22000);
    };

    return (
        <VideoContext.Provider value={{ showVideo, onPlayVideo }}>
            {children}
            {showVideo && (
                <View style={styles.videoContainer}>
                    <Video
                        source={{ uri: videoUrl }} // Firebaseから取得したURLを使用
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"
                        shouldPlay={true}
                        isLooping={true}
                        style={styles.video}
                        useNativeControls={false}
                    />
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
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    blinkStatusText: {
        fontSize: 14,
        color: 'white',
        marginTop: 10,
    },
});
