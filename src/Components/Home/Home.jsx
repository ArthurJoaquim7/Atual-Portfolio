import { useState, useEffect } from 'react'
import style from './Home.module.css'
import terra2 from '../Img/terra2.png'
import fanL from '../Img/fanL.png'
import fanR from '../Img/fanR.png'


import { motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'
import { useRef } from 'react'
export const Home = () => {

  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yyy = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const sliceL = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
  const sliceR = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

  // ===
  const [visible, setVisible] = useState(true);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setVisible(window.scrollY <= 50); 
  };

  return (
    <AnimatePresence className={style.container}>
      <div className={style.home} ref={ref}>
        <motion.div className={style.new}
          style={{ y: yyy }}
        >
          <h1 className={style.h11}>ARTHUR</h1>
          <div className={style.sliceDiv}>
            <motion.div className={style.h22}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: -50 }}
              transition={{ delay: 0.4, duration: 0.3, type: 'spring', stiffness: 300 }}
              style={{ x: sliceR }}
            >DEV FRONT-END</motion.div>
            <motion.div className={style.h22Bottom} aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: -50 }}
              transition={{ delay: 0.4, duration: 0.3, type: 'spring', stiffness: 300 }}
              style={{ x: sliceL }}
            >DEV FRONT-END</motion.div>
          </div>
          <motion.div className={style.carrocel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: -50 }}
            transition={{ delay: 0.5, duration: 0.3, type: 'spring', stiffness: 300 }}
          >

          </motion.div>
          {
            visible && (
              <motion.div className={style.slider}
                style={{ x: sliceL }}
                exit={{ opacity: 0, y: 200, transition: { duration: 1, delay: 0.1 } }}
              >
                <img src={fanL} className={style.fanL}  alt='fan'/>
                <p className={style.full}>FUTURO FULLSTACK</p>
                <img src={fanR} className={style.fanR}  alt='fan'/>
              </motion.div>
            )
          }
        </motion.div>
        {/* ========== */}
        <img src={terra2} className={style.terra} alt='terra'/>
      </div >
    </AnimatePresence>

  )
}
