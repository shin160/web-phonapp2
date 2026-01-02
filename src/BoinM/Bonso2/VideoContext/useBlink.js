// useBlink.js
import { useState, useEffect } from 'react';

export const useBlink = (showVideo) => {
    const [blink, setBlink] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        console.log("useEffect triggered, showVideo:", showVideo); // 状態のログ出力

        let blinkInterval = null;

        if (showVideo) {
            const blinkTimeout = setTimeout(() => {
                setBlink(true);
                blinkInterval = setInterval(() => {
                    setBlink(prev => !prev);
                }, 500); // 500ミリ秒ごとに点滅状態を切り替え
            }, 30000); // 30秒後に点滅を開始

            const stopBlinkTimeout = setTimeout(() => {
                setBlink(false);
                clearInterval(blinkInterval);
                setShowBackground(true); // 点滅終了後、背景を表示
            }, 35000); // 35秒後に点滅を終了

            return () => {
                clearTimeout(blinkTimeout);
                clearTimeout(stopBlinkTimeout);
                clearInterval(blinkInterval);
            };
        } else {
            // showVideo が false の場合、背景表示をリセット
            setShowBackground(false);
        }
    }, [showVideo]);

    return { blink, showBackground };
};
