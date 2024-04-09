import style from '../Parallax/Parallax.module.css'
import waveTest from '../Img/waveTest.png'
import codeF from '../Img/codeF.png'
import vaca from '../Img/vaca.png'
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
                <img src={codeF} className={style.vacaCode} />
            </div>
            <img src={waveTest} className={style.waveBottom} />
            <div className={style.centered}>
            </div>
        </motion.div>
    );
};
