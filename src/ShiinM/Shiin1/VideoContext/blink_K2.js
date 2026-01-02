// src\Main\Main1\Shiin1\VideoContext\blink_K2.js
import { useState, useEffect } from 'react';

export const useBlink_K2 = (showVideo) => {
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
            }, 5500);                     // (1)START 点滅

            const stopBlinkTimeout = setTimeout(() => {
                setBlink(false);
                if (blinkInterval) clearInterval(blinkInterval);
                setShowBackground(true);  // (2)START 背景色
            }, 7000);                    // (3)FIN 点滅→ START 背景色

            const hideBackgroundTimeout = setTimeout(() => {
                setShowBackground(false); // (4)FIN 背景色
            }, 25000);

            return () => {
                clearTimeout(blinkTimeout);
                clearTimeout(stopBlinkTimeout);
                if (blinkInterval) clearInterval(blinkInterval);
            };
        }
    }, [showVideo]);

    return { blink, showBackground };
};
