import style from '../Parallax/Parallax.module.css'
// import waveTop from '../Img/waveTop.png'
// import waveBottom from '../Img/waveBottom.png'
// import waveWave from '../Img/waveWave.png'
// import waveFFF from '../Img/waveFFF.png'
import waveTest from '../Img/waveTest.png'
import waveV from '../Img/waveV.png'
// import earthTop from '../Img/earthTop.jpg'
// import earth from '../img/earth.jpg'
import vaca from '../img/vaca.png'
import vacaCode from '../img/vacaCode.png'
import emailZoom from '../img/emailZoom.png'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Parallax = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 6]);

    return (
        <motion.div className={style.container} ref={ref}>
            <div className={style.floating}>
                <img src={vaca} className={style.vaca} />
                <img src={vacaCode} className={style.vacaCode} />
            </div>
            <img src={waveV} className={style.waveTop} />
            <img src={waveTest} className={style.waveBottom} />
            {/* <h1 className={style.tag} >CONTATO</h1> */}
            <div className={style.centered}>
                <motion.img src={emailZoom} className={style.circle} style={{ scale }} />
            </div>
        </motion.div>
    );
};
