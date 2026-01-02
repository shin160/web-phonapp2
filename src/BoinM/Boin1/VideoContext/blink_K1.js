// src\Main\Main1\Shiin1\VideoContext\blink_K1.js
import { useState, useEffect } from 'react';

export const useBlink = (showVideo) => {
    const [blink, setBlink] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        let blinkInterval = null;
        let hideBackgroundTimeout = null;

        if (showVideo) {
            const blinkTimeout = setTimeout(() => {
                setBlink(true);
                blinkInterval = setInterval(() => {
                    setBlink(prev => !prev);
                }, 500);
            }, 3500);                     // (1)START 点滅

            const stopBlinkTimeout = setTimeout(() => {
                setBlink(false);
                clearInterval(blinkInterval);
                setShowBackground(true);  // (2)START 背景色
            }, 11000);                     // (3)FIN 点滅→ START 背景色

            hideBackgroundTimeout = setTimeout(() => {
                setShowBackground(false); // (4)FIN 背景色
            }, 23000);

            return () => {
                clearTimeout(blinkTimeout);
                clearTimeout(stopBlinkTimeout);
                clearInterval(blinkInterval);
            };
        }

        // showVideoの値に関わらず、35秒後に背景色を非表示にする
        hideBackgroundTimeout = setTimeout(() => {
            setShowBackground(false);
        }, 35000);

        return () => {
            clearTimeout(hideBackgroundTimeout);
            if (blinkInterval) clearInterval(blinkInterval);
        };
    }, [showVideo]);

    return { blink, showBackground };
};
