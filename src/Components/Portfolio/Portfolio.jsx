import style from './Portfolio.module.css'
import cssC from '../Img/cssC.png'
import cssS from '../Img/cssS.png'
import htmlC from '../Img/htmlC.png'
import htmlS from '../Img/htmlS.png'
import jsC from '../Img/jsC.png'
import jsS from '../Img/jsS.png'
import reactC from '../Img/reactC.png'
import reactS from '../Img/reactS.png'
import nodeC from '../Img/nodeC.png'
import nodeS from '../Img/nodeS.png'
import mysqlC from '../Img/mysqlC.png'
import mysqlS from '../Img/mysqlS.png'
import discDONE from '../Img/discDONE.png'
import hboDONE from '../Img/hboDONE.png'
import ecoDONE from '../Img/ecoDONE.png'
import webDONE from '../Img/webDONE.png'
import motionC from '../Img/motionC.png'
import express from '../Img/express.png'
import motionS from '../Img/motionS.png'
import cloudTop from '../Img/cloudTop.svg'
// import java from '../Img/java.png'
// import python from '../Img/python.png'
// import angular from '../Img/angular.png'
// import cx from '../Img/cx.png'
import seeMoreIcon from '../Img/seeMoreIcon.png'
import seta from '../Img/seta.png'
import click from '../Img/click.png'
import clickR from '../Img/clickR.png'
import gHub from '../Img/gHub.png'
// import testGif from '../Img/testGif.gif'

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'

export const Portfolio = () => {
  // const ref = useRef()
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"]
  // })

  const viewBottom = {
    initial: {
      y: -70,
      opacity: 0,

    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeInOut', delay: 0.3 }
    }
  }

  // const sliceL = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
  // const sliceR = useTransform(scrollYProgress, [0, 1], ["-0%", "0%"])

  return (
    <AnimatePresence>
      <div className={style.portfolio} id='portfolio'>
        <div className={style.carrocel}>
          <div className={style.slider}>
            <img src={reactC} className={style.imgSlide} />
            <img src={nodeC} className={style.imgSlide} />
            <img src={express} className={style.imgSlide} />
            <img src={cssC} className={style.imgSlide} />
            <img src={jsC} className={style.imgSlide} />
            <img src={htmlC} className={style.imgSlide} />
            <img src={mysqlC} className={style.imgSlide} />
            <img src={motionC} className={style.imgSlide} />
          </div>
        </div>
        <div className={style.sliceDiv}>
          <motion.div className={style.h22}
            initial={{ opacity: 0, x: -300, y: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 300 }}
          >PROJETOS</motion.div>
          <motion.div className={style.h22Bottom} aria-hidden="true"
            initial={{ opacity: 0, x: 300, y: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 300 }}
          >PROJETOS</motion.div>
        </div> 
        {/* ----CONTENT---- */}
        <div className={style.content} >
          {/* DISCORD */}
          <div className={style.contentDiv}>
            <div className={`${style.contentCard} ${style.positionMiddle}`}>
              <div className={`${style.leftCard} ${style.leftCardMiddle}`}>
                <img src={discDONE} className={style.test} />
              </div>
              <div className={`${style.rightCard} ${style.rightCardMiddle}`}>
                <div className={`${style.projectDesc} ${style.projectDescMiddle}`}>
                  <div className={style.h1Div}>
                    <span className={style.clone}>CLONE DO</span>
                    <motion.h1
                      initial={{ color: "#58595a" }}
                      whileInView={{ color: ["#7289da"], transition: { duration: 0.3, delay: 0.25 } }}
                      viewport={{
                        once: true,
                      }}
                    >DISCORD</motion.h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus ipsum id nisi veniam, in, quia odio consectetur quo eos recusandae</p>
                </div>
                <div className={`${style.divIcon} ${style.divIconMiddle}`}>
                  <div className={style.goIconDiv}>
                    <motion.img src={click} className={`${style.goIcon} ${style.click}`}
                      initial={{ scale: 0.7 }}
                      whileInView={{
                        scale: [0.7, 1, 0.7], transition: { duration: 2, repeat: Infinity }
                      }}
                      viewport={{
                        once: true,
                      }}
                    />
                    <a href="https://discord-navy.vercel.app/" target='blank'>
                      <img src={gHub} className={style.goIcon} />
                    </a>
                  </div>
                  <div className={style.toolsDiv}>
                    <img src={reactC} className={style.tools} />
                    <img src={htmlC} className={style.tools} />
                    <img src={cssC} className={style.tools} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* E-COMMERCE*/}
          <div className={style.contentDiv}>
            <div className={`${style.contentCard} ${style.positionRight}`}>
              <div className={`${style.leftCard} ${style.leftCardRightShow}`}>
                <img src={ecoDONE} className={style.test} />
              </div>
              <div className={`${style.rightCard} ${style.rightCardRight}`}>
                <div className={`${style.projectDesc} ${style.projectDescRight}`}>
                  <div className={style.h1Div}>
                    <span className={style.clone}>API FAKESTORE</span>
                    <motion.h1
                      initial={{ color: "#58595a" }}
                      whileInView={{ color: ["#d259eb"], transition: { duration: 0.3, delay: 0.25 } }}
                      viewport={{
                        once: true,
                      }}
                    >E-COMMERCE</motion.h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus ipsum id nisi veniam, in, quia odio consectetur quo eos recusandae</p>
                </div>
                <div className={`${style.divIcon} ${style.divIconRight}`}>
                  <div className={`${style.goIconDiv} ${style.goIconDivRight}`}>
                    <a href="" target='blank'><img src={gHub} className={style.goIcon} /></a>
                    <motion.img src={clickR} className={`${style.goIcon} ${style.click}`}
                      initial={{ scale: 0.7 }}
                      whileInView={{
                        scale: [0.7, 1, 0.7], transition: { duration: 2, repeat: Infinity }
                      }}
                      viewport={{
                        once: true,
                      }}
                    />
                  </div>
                  <div className={style.toolsDiv}>
                    <img src={reactC} className={style.tools} />
                    <img src={jsC} className={style.tools} />
                    <img src={motionC} className={style.tools} />
                    <img src={htmlC} className={style.tools} />
                    <img src={cssC} className={style.tools} />
                  </div>
                </div>
              </div>
              <div className={`${style.leftCard} ${style.leftCardRight}`}>
                <img src={ecoDONE} className={style.test} />
              </div>
            </div>
          </div>
          {/* HBO */}
          <div className={style.contentDiv}>
            <div className={`${style.contentCard} ${style.positionMiddle}`}>
              <div className={`${style.leftCard} ${style.leftCardMiddle}`}>
                <img src={hboDONE} className={style.test} />
              </div>
              <div className={`${style.rightCard} ${style.rightCardMiddle}`}>
                <div className={`${style.projectDesc} ${style.projectDescMiddle}`}>
                  <div className={style.h1Div}>
                    <span className={style.clone}>CLONE DO</span>
                    <motion.h1
                      initial={{ color: "#58595a" }}
                      whileInView={{ color: ["purple"], transition: { duration: 0.3, delay: 0.25 } }}
                      viewport={{
                        once: true,
                      }}
                    >HBO MAX FILMES</motion.h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus ipsum id nisi veniam, in, quia odio consectetur quo eos recusandae</p>
                </div>
                <div className={`${style.divIcon} ${style.divIconMiddle}`}>
                  <div className={style.goIconDiv}>
                    <motion.img src={click} className={`${style.goIcon} ${style.click}`}
                      initial={{ scale: 0.7 }}
                      whileInView={{
                        scale: [0.7, 1, 0.7], transition: { duration: 2, repeat: Infinity }
                      }}
                      viewport={{
                        once: true,
                      }}
                    />
                    <a href="https://arthurkhalifa.github.io/Catalogo-De-Filmes/" target='blank'><img src={gHub} className={style.goIcon} /></a>
                  </div>
                  <div className={style.toolsDiv}>
                    <img src={jsC} className={style.tools} />
                    <img src={htmlC} className={style.tools} />
                    <img src={cssC} className={style.tools} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FULLSTACK CADASTRO */}
          <div className={style.contentDiv}>
            <div className={`${style.contentCard} ${style.positionRight}`}>
              <div className={`${style.leftCard} ${style.leftCardRightShow}`}>
                <img src={webDONE} className={style.test} />
              </div>
              <div className={`${style.rightCard} ${style.rightCardRight}`}>
                <div className={`${style.projectDesc} ${style.projectDescRight}`}>
                  <div className={style.h1Div}>
                    <span className={style.clone}>FULL STACK</span>
                    <motion.h1
                      initial={{ color: "#58595a" }}
                      whileInView={{ color: ["#992d2d"], transition: { duration: 0.3, delay: 0.25 } }}
                      viewport={{
                        once: true,
                      }}
                    >CADASTRAMENTO</motion.h1>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus ipsum id nisi veniam, in, quia odio consectetur quo eos recusandae</p>
                </div>
                <div className={`${style.divIcon} ${style.divIconRight}`}>
                  <div className={`${style.goIconDiv} ${style.goIconDivRight}`}>
                    <a href="https://reactjs-cadastro.vercel.app/" target='blank'><img src={gHub} className={style.goIcon} /></a>
                    <motion.img src={clickR} className={`${style.goIcon} ${style.click}`}
                      initial={{ scale: 0.7 }}
                      whileInView={{
                        scale: [0.7, 1, 0.7], transition: { duration: 2, repeat: Infinity }
                      }}
                      viewport={{
                        once: true,
                      }}
                    />
                  </div>
                  <div className={style.toolsDiv}>
                    <img src={reactC} className={style.tools} />
                    <img src={nodeC} className={style.tools} />
                    <img src={mysqlC} className={style.tools} />
                    <img src={express} className={style.tools} />
                  </div>
                </div>
              </div>
              <div className={`${style.leftCard} ${style.leftCardRight}`}>
                <img src={webDONE} className={style.test} />
              </div>
            </div>
          </div>
          <motion.div className={style.seeMoreDiv}
          >
            <motion.p className={style.pShowHide} variants={viewBottom}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
            >
              <img src={seta} className={style.seta} />
              Você pode ver todos os meus projetos no meu
              <span className='color'> GITHUB</span>
            </motion.p>
            <motion.a href="https://github.com/ArthurKhalifa?tab=repositories" target='blank'
              initial={{}}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeatType: "loop", repeat: Infinity, duration: 2, ease: 'easeInOut' }}><img src={seeMoreIcon} className={style.seeMoreImg} /></motion.a>
          </motion.div>
        </div>
        <div className={style.line}></div>
      </div>
    </AnimatePresence>
  )
}
