import React, { createContext, useContext, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebaseConfig'; // 更新されたインポート


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
export const VideoProvider73 = ({ children }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState(null);

    useEffect(() => {
        const fetchVideo = async () => {
            const videoRef = ref(storage, 'Boin/V_73.mp4'); // 正しいパスを指定
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
        }, 18000);
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
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    video: {
        width: '61%',
        height: '53%',
        resizeMode: 'contain',
        position: 'absolute',
        top: '44%',
        left: '33%',
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
