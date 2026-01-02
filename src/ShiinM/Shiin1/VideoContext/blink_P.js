import { useState, useEffect } from 'react';

export const useBlink = (showVideo) => {
    const [blink, setBlink] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        let blinkInterval = null;
        let hideBackgroundTimeout = null;

        if (showVideo) {
            // 点滅を開始するタイマー
            const blinkTimeout = setTimeout(() => {
                setBlink(true);
                blinkInterval = setInterval(() => {
                    setBlink(prev => !prev);
                }, 500);
            }, 21500); // 〇秒後に点滅開始

            // 点滅を終了し、背景を表示するタイマー
            const stopBlinkTimeout = setTimeout(() => {
                setBlink(false);
                clearInterval(blinkInterval);
                setShowBackground(true); // 点滅終了後、背景を表示

                // 背景を消すタイマー
                hideBackgroundTimeout = setTimeout(() => {
                    setShowBackground(false);
                }, 2500); // 背景表示から〇秒後に消す
            }, 25000); // 25秒後に点滅終了

            return () => {
                clearTimeout(blinkTimeout);
                clearTimeout(stopBlinkTimeout);
                clearTimeout(hideBackgroundTimeout);
                if (blinkInterval) clearInterval(blinkInterval);
            };
        } else {
            // showVideo が false の場合、即座に背景を非表示にする
            setShowBackground(false);
        }
    }, [showVideo]);

    return { blink, showBackground };
};
