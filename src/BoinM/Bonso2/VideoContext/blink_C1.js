import { useState, useEffect } from 'react';

export const useBlink = (showVideo) => {
    const [blink, setBlink] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        let blinkInterval = null;
        let hideBackgroundTimeout = null;

        // 点滅の開始
        if (showVideo) {
            // 3.5秒後に点滅を開始
            const blinkTimeout = setTimeout(() => {
                setBlink(true);
                blinkInterval = setInterval(() => {
                    setBlink(prev => !prev);
                }, 500);
            }, 3500);

            // 8秒後に背景色を表示
            const backgroundTimeout = setTimeout(() => {
                setShowBackground(true);
            }, 8000);

            // コンポーネントのクリーンアップ
            return () => {
                clearTimeout(blinkTimeout);
                clearTimeout(backgroundTimeout);
                clearInterval(blinkInterval);
                clearTimeout(hideBackgroundTimeout);
            };
        } else {
            // showVideo が false になったら即座に点滅を停止
            setBlink(false);

            // showVideo が終了して5秒後に背景色を非表示にする
            hideBackgroundTimeout = setTimeout(() => {
                setShowBackground(false);
            }, 5000);

            return () => {
                clearTimeout(hideBackgroundTimeout);
                if (blinkInterval) clearInterval(blinkInterval);
            };
        }
    }, [showVideo]);

    return { blink, showBackground };
};
