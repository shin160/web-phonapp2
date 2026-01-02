import { useState, useEffect } from 'react';

export const useBlink = (showVideo) => {
    const [blink, setBlink] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const [startBlinking, setStartBlinking] = useState(false); // 点滅を開始するかどうかの状態を追加

    useEffect(() => {
        let blinkInterval = null;
        let hideAllTimeout = null;

        // showVideo が false になり、かつ点滅開始のフラグが立っている場合に処理を実行
        if (!showVideo && startBlinking) {
            // 点滅を開始
            setBlink(true);
            blinkInterval = setInterval(() => {
                setBlink(blink => !blink);
            }, 500);

            // 5秒後に点滅と背景を非表示にする
            hideAllTimeout = setTimeout(() => {
                setBlink(false); // 点滅を停止
                setShowBackground(false); // 背景を非表示に
                setStartBlinking(false); // 点滅開始フラグをリセット
            }, 5000);
        }

        // showVideo が true に変わった時、点滅開始のフラグを立てる
        if (showVideo) {
            setStartBlinking(true); // 点滅を開始するフラグを立てる
        }

        // コンポーネントがアンマウントされる時、または依存する状態が変更された時のクリーンアップ関数
        return () => {
            clearInterval(blinkInterval);
            clearTimeout(hideAllTimeout);
        };
    }, [showVideo, startBlinking]); // 依存配列に startBlinking を追加

    return { blink, showBackground };
};
