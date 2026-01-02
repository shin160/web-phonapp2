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
                }, 300);
            }, 1000);                     // (1)START 点滅

            const stopBlinkTimeout = setTimeout(() => {
                setBlink(false);
                if (blinkInterval) clearInterval(blinkInterval);
                setShowBackground(true);  // (2)START 背景色
            }, 4000);                    // (3)FIN 点滅→ START 背景色

            const hideBackgroundTimeout = setTimeout(() => {
                setShowBackground(false); // (4)FIN 背景色
            }, 15000);

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
