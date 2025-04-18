import style from './About.module.css'
import time from '../Img/time.png'
import location from '../Img/location.png'
import email from '../Img/email.png'
import eng from '../Img/eng.png'
import eng2 from '../Img/eng2.png'
import log from '../Img/log.png'
import ball from '../Img/ball.png'
import calis from '../Img/calis.png'
import ads from '../Img/ads.png'
import wasd from '../Img/wasd.png'
import correr from '../Img/correr.png'
import topWave from '../Img/topWave.png'


import ArthurCurriculum from '../PtCV/ArthurCV.pdf'

import { easeInOut, motion, AnimatePresence } from 'framer-motion'

const viewLeft = {
  initial: {
    x: -100,
    opacity: 0.5,

  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, easeInOut }
  }
}
const viewRight = {
  initial: {
    x: -50,
    opacity: 0.5,

  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, easeInOut }
  }
}

export const About = () => {
  return (
    <AnimatePresence>
      <div className={style.about}>
        <img src={topWave} className={style.topWave} alt='topWave'/>
        <div className={style.intro}>
          <motion.div className={style.Lintro}
          >
            <motion.h1
              initial={{ opacity: 0, y: 75, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 200 }}
            ><span className={style.reduce}>Olá, <span className={style.color}>s</span>ou<br /></span> Arthur <span className={style.color}>Joaquim</span></motion.h1>
            <motion.p className={style.p2}
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
              }}
              transition={{ duration: 0.3, delay: 0.3, type: 'spring', stiffness: 200 }}
            >Estou a <span className='fff2'>mais de 2 anos</span> estudando e criando projetos em <span className='fff2'>FullStack</span> para poder me desenvolver profissionalmente e estar <span className='fff2'>pronto para o mercado</span></motion.p>
            {/* BTN */}
            <div className={style.btnDiv}>
              <a href={ArthurCurriculum} download='ArthurCurriculum' className={style.a}>
                <button className={style.btn}>
                  <span className={style.span}>Currículo</span>
                  <span className={style.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
                  </span>
                </button>
              </a>
            </div>
          </motion.div>
          {/* === */}
          <div className={style.info}>
            <motion.div className={style.dInfo} variants={viewLeft}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <motion.p className={style.h2}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 200 }}
              >Detalhes</motion.p>
              <div className={style.flex}>
                <img src={time} className={style.aboutIcons} alt='time'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, delay: 0.2, type: 'spring', stiffness: 50 }}
                >25 anos de idade</motion.p>
              </div>
              {/* ==== */}
              <div className={style.flex}>
                <img src={location} className={style.aboutIcons} alt='location'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, delay: 0.3, type: 'spring', stiffness: 50 }}
                >Vitória de Santo Antão, Pernambuco - Brasil</motion.p>
              </div>
              {/* ==== */}
              <div className={style.flex}>
                <img src={email} className={style.aboutIcons} alt='email'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, delay: 0.4, type: 'spring', stiffness: 50 }}
                >arthursantosae@hotmail.com</motion.p>
              </div>
            </motion.div>
            {/* === */}
            <motion.div className={`${style.dInfo} ${style.dInfo2}`} variants={viewRight}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <motion.p className={style.h2}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{
                  once: true,
                }}
                transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 200 }}
              >Formações</motion.p>
              <div className={style.flex}>
                <img src={log} className={style.aboutIcons} alt='logistic'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }} transition={{ duration: 0.3, delay: 0.2, type: 'spring', stiffness: 50 }}>
                  Logistica - Graduação(2022) UNIVISA</motion.p>
              </div>
              <div className={style.flex}>
                <img src={ads} className={style.aboutIcons} alt='degree'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }} transition={{ duration: 0.3, delay: 0.3, type: 'spring', stiffness: 50 }}
                >Análise e Desenvolvimento de Sistemas(4/5) UNINTER</motion.p>
                {/* <img src={xp} className={style.aboutIcons} /> */}
              </div>
              <div className={style.flex}>
                <img src={eng2} className={style.aboutIcons} alt='en'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }} transition={{ duration: 0.3, delay: 0.4, type: 'spring', stiffness: 50 }}
                >Inglês intermediário-Avançado B2</motion.p>
              </div>
            </motion.div>
            {/* === */}
            <motion.div className={style.dInfo} variants={viewLeft}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <motion.p className={style.h2}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{
                  once: true,
                }} transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 200 }}
              >No tempo livre eu...</motion.p>
              <div className={style.flex}>
                <img src={calis} className={style.aboutIcons} alt='contact'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }} transition={{ duration: 0.3, delay: 0.1, type: 'spring', stiffness: 50 }}
                >Treino Calistenia</motion.p>
              </div>
              <div className={style.flex}>
                <img src={ball} className={style.aboutIcons} alt='ball'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }} transition={{ duration: 0.3, delay: 0.2, type: 'spring', stiffness: 50 }}
                >Jogo bola</motion.p>
              </div>
              <div className={style.flex}>
                <img src={correr} className={style.aboutIcons} alt='run'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }} transition={{ duration: 0.3, delay: 0.3, type: 'spring', stiffness: 50 }}
                >Stay Hard (by David Goggins)</motion.p>
              </div>
              <div className={style.flex}>
                <img src={wasd} className={style.aboutIcons} alt='cs2'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }} transition={{ duration: 0.3, delay: 0.4, type: 'spring', stiffness: 50 }}
                >CS2 para desestressar <span>(Ou não)</span></motion.p>
              </div>
              <div className={style.flex}>
                <img src={eng} className={style.aboutIcons} alt='eng'/>
                <motion.p
                  initial={{ opacity: 0, x: 75 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{
                    once: true,
                  }}
                  transition={{ duration: 0.3, delay: 0.5, type: 'spring', stiffness: 50 }}
                >Speak english at DISCORD<span className='parent'>(English Server)</span></motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </div >
    </AnimatePresence>

  )
}
