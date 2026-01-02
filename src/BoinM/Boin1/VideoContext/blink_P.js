import { useState, useEffect } from 'react';

export const useBlink = (showVideo) => {
    const [blink, setBlink] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        let blinkInterval = null;

        if (showVideo) {
            const blinkTimeout = setTimeout(() => {
                setBlink(true);
                blinkInterval = setInterval(() => {
                    setBlink(prev => !prev);
                }, 500);
            }, 18000); // 点滅を開始

            const stopBlinkTimeout = setTimeout(() => {
                setBlink(false);
                clearInterval(blinkInterval);
                setShowBackground(true); // 点滅終了後、背景を表示
            }, 23000); // 点滅を終了

            return () => {
                clearTimeout(blinkTimeout);
                clearTimeout(stopBlinkTimeout);
                if (blinkInterval) clearInterval(blinkInterval);
            };
        }

        // showVideo が false の場合、35秒後に背景を非表示にする
        const hideBackgroundTimeout = setTimeout(() => {
            setShowBackground(false);
        }, 23000);

        return () => {
            clearTimeout(hideBackgroundTimeout);
        };
    }, [showVideo]);

    return { blink, showBackground };
};
