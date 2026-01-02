import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spa1 from './Boin1/Spa1';
import Spa2 from './Boin1/Spa2';
import Spa3 from './Boin1/Spa3';
import Spa4 from './Boin1/Spa4';

import Danm0 from './Boin1/Danm0';
import Danm1 from './Boin1/Danm1';
import Danm2 from './Boin1/Danm2';
import Danm3 from './Boin1/Danm3';
import Danm4 from './Boin1/Danm4';
import Danm5 from './Boin1/Danm5';
import Danm5_2 from './Boin1/Danm5_2';
import Danm5_3 from './Boin1/Danm5_3';
import Danm6 from './Boin1/Danm6';

import Hatu00 from './Boin1/Hatu00';
import Hatu01 from './Boin1/Hatu01';
import Hatu1 from './Boin1/Hatu1';
import Hatu2 from './Boin1/Hatu2';
import Hatu3 from './Boin1/Hatu3';
import Hatu4 from './Boin1/Hatu4';
import Hatu5 from './Boin1/Hatu5';
import Hatu6 from './Boin1/Hatu6';

import { VideoProvider11 } from './Boin1/VideoContext/VC_11';
import { VideoProvider12 } from './Boin1/VideoContext/VC_12';
import { VideoProvider13 } from './Boin1/VideoContext/VC_13';
import { VideoProvider14 } from './Boin1/VideoContext/VC_14';
import { VideoProvider22 } from './Boin1/VideoContext/VC_22';
import { VideoProvider23 } from './Boin1/VideoContext/VC_23';
import { VideoProvider33 } from './Boin1/VideoContext/VC_33';

import { VideoProvider51 } from './Boin1/VideoContext/VC_51';
import { VideoProvider52 } from './Boin1/VideoContext/VC_52';
import { VideoProvider53 } from './Boin1/VideoContext/VC_53';
import { VideoProvider61 } from './Boin1/VideoContext/VC_61';
import { VideoProvider62 } from './Boin1/VideoContext/VC_62';
import { VideoProvider63 } from './Boin1/VideoContext/VC_63';

import { VideoProvider71 } from './Boin1/VideoContext/VC_71';
import { VideoProvider72 } from './Boin1/VideoContext/VC_72';
import { VideoProvider73 } from './Boin1/VideoContext/VC_73';
import { VideoProvider74 } from './Boin1/VideoContext/VC_74';
import { VideoProvider82 } from './Boin1/VideoContext/VC_82';
import { VideoProvider91 } from './Boin1/VideoContext/VC_91';
import { VideoProvider92 } from './Boin1/VideoContext/VC_92';
import { VideoProvider93 } from './Boin1/VideoContext/VC_93';

const Boin1 = () => {
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        // 一定時間後にテキストを非表示にする
        const timer = setTimeout(() => {
            setShowText(false);
        }, 3000);

        // クリーンアップ関数
        return () => {
            clearTimeout(timer); // タイマーをクリア
            setShowText(true); // コンポーネントがアンマウントされる前にテキストを表示
        };
    }, []);

    return (
        <VideoProvider11>
            <VideoProvider12>
                <VideoProvider13>
                    <VideoProvider14>
                        <VideoProvider22>
                            <VideoProvider23>
                                <VideoProvider33>

                                    <VideoProvider51>
                                        <VideoProvider52>
                                            <VideoProvider53>
                                                <VideoProvider61>
                                                    <VideoProvider62>
                                                        <VideoProvider63>

                                                            <VideoProvider71>
                                                                <VideoProvider72>
                                                                    <VideoProvider73>
                                                                        <VideoProvider74>
                                                                            <VideoProvider82>
                                                                                <VideoProvider91>
                                                                                    <VideoProvider92>
                                                                                        <VideoProvider93>

                                                                                            <View style={styles.container}>
                                                                                                {showText && (
                                                                                                    <>
                                                                                                        <Text style={styles.centeredText1}>①</Text>
                                                                                                        <Text style={styles.centeredText2}>②</Text>
                                                                                                        <Text style={styles.centeredText3}>③</Text>
                                                                                                        <Text style={styles.centeredText4}>-</Text>
                                                                                                        <Text style={styles.centeredText5}>⑤</Text>
                                                                                                        <Text style={styles.centeredText6}>⑥</Text>
                                                                                                        <Text style={styles.centeredText7}>⑦</Text>
                                                                                                        <Text style={styles.centeredText8}>⑧</Text>
                                                                                                        <Text style={styles.centeredText9}>⑨</Text>
                                                                                                    </>
                                                                                                )}

                                                                                                <View style={styles.spa1Container}>
                                                                                                    <Spa1 />
                                                                                                </View>

                                                                                                <View style={styles.danm0Container}>
                                                                                                    <Danm0 />
                                                                                                </View>
                                                                                                <View style={styles.danm1Container}>
                                                                                                    <Danm1 />
                                                                                                </View>
                                                                                                <View style={styles.danm2Container}>
                                                                                                    <Danm2 />
                                                                                                </View>
                                                                                                <View style={styles.danm3Container}>
                                                                                                    <Danm3 />
                                                                                                </View>
                                                                                                <View style={styles.danm4Container}>
                                                                                                    <Danm4 />
                                                                                                </View>
                                                                                                <View style={styles.danm5Container}>
                                                                                                    <Danm5 />
                                                                                                </View>
                                                                                                <View style={styles.danm5_2Container}>
                                                                                                    <Danm5_2 />
                                                                                                </View>
                                                                                                <View style={styles.danm5_3Container}>
                                                                                                    <Danm5_3 />
                                                                                                </View>
                                                                                                <View style={styles.danm6Container}>
                                                                                                    <Danm6 />
                                                                                                </View>

                                                                                                <View style={styles.spa2Container}>
                                                                                                    <Spa2 />
                                                                                                </View>

                                                                                                <View style={styles.Hatu00Container}>
                                                                                                    <Hatu00 />
                                                                                                </View>
                                                                                                <View style={styles.Hatu01Container}>
                                                                                                    <Hatu01 />
                                                                                                </View>

                                                                                                <View style={styles.spa3Container}>
                                                                                                    <Spa3 />
                                                                                                </View>
                                                                                                <View style={styles.hatu1Container}>
                                                                                                    <Hatu1 />
                                                                                                </View>
                                                                                                <View style={styles.hatu2Container}>
                                                                                                    <Hatu2 />
                                                                                                </View>
                                                                                                <View style={styles.hatu3Container}>
                                                                                                    <Hatu3 />
                                                                                                </View>
                                                                                                <View style={styles.hatu4Container}>
                                                                                                    <Hatu4 />
                                                                                                </View>
                                                                                                <View style={styles.hatu5Container}>
                                                                                                    <Hatu5 />
                                                                                                </View>
                                                                                                <View style={styles.hatu6Container}>
                                                                                                    <Hatu6 />
                                                                                                </View>
                                                                                                <View style={styles.spa3Container}>
                                                                                                    <Spa4 />
                                                                                                </View>
                                                                                            </View>


                                                                                        </VideoProvider93>
                                                                                    </VideoProvider92>
                                                                                </VideoProvider91>
                                                                            </VideoProvider82>

                                                                        </VideoProvider74>
                                                                    </VideoProvider73>
                                                                </VideoProvider72>
                                                            </VideoProvider71>

                                                        </VideoProvider63>
                                                    </VideoProvider62>
                                                </VideoProvider61>
                                            </VideoProvider53>
                                        </VideoProvider52>
                                    </VideoProvider51>

                                </VideoProvider33>
                            </VideoProvider23>
                        </VideoProvider22>
                    </VideoProvider14>
                </VideoProvider13>
            </VideoProvider12>
        </VideoProvider11>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    centeredText1: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '51.5%',
        left: '49.5%',
        zIndex: 1,
    },
    centeredText2: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '70%',
        left: '49.5%',
        zIndex: 1,
    },
    centeredText3: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '88.5%',
        left: '49.5%',
        zIndex: 1,
    },
    centeredText4: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '51.5%',
        left: '69%',
        zIndex: 1,
    },
    centeredText5: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '70%',
        left: '67%',
        zIndex: 1,
    },
    centeredText6: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '88.5%',
        left: '67%',
        zIndex: 1,
    },
    centeredText7: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '51.5%',
        left: '84.5%',
        zIndex: 1,
    },
    centeredText8: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '70%',
        left: '84.5%',
        zIndex: 1,
    },
    centeredText9: {
        position: 'absolute',
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        top: '88.5%',
        left: '84.5%',
        zIndex: 1,
    },

    // 34%
    spa1Container: {
        flex: 0.03,
    },
    danm0Container: {
        flex: 0.03,
    },
    danm1Container: {
        flex: 0.03,
    },
    danm2Container: {
        flex: 0.07,
    },
    danm3Container: {
        flex: 0.03,
    },
    danm4Container: {
        flex: 0.03,
    },
    danm5Container: {
        flex: 0.03,
    },

    danm5_2Container: {
        flex: 0.031,
    },
    danm5_3Container: {
        flex: 0.03,
    },
    danm6Container: {
        flex: 0.03,
    },

    //9%
    spa2Container: {
        flex: 0.015,
    },
    Hatu00Container: {
        flex: 0.02,
    },
    Hatu01Container: {
        flex: 0.05,
    },
    spa3Container: {
        flex: 0.005,
    },

    // 57%
    hatu1Container: {
        flex: 0.092,
    },
    hatu2Container: {
        flex: 0.092,
    },
    hatu3Container: {
        flex: 0.092,
    },
    hatu4Container: {
        flex: 0.092,
    },
    hatu5Container: {
        flex: 0.092,
    },
    hatu6Container: {
        flex: 0.092,
    },
    spa4Container: {
        flex: 0.018,
    },
});

export default Boin1;
