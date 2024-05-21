import style from './Portfolio.module.css'
import cssC from '../Img/cssC.png'
import htmlC from '../Img/htmlC.png'
import jsC from '../Img/jsC.png'
import reactC from '../Img/reactC.png'
import nodeC from '../Img/nodeC.png'
import mysqlC from '../Img/mysqlC.png'
import discDONE from '../Img/discDONE.png'
import hboDONE from '../Img/hboDONE.png'
import ecoDONE from '../Img/ecoDONE.png'
import webDONE from '../Img/webDONE.png'
import motionC from '../Img/motionC.png'
import express from '../Img/express.png'
import seeMoreIcon from '../Img/seeMoreIcon.png'
import seta from '../Img/seta.png'
import click from '../Img/click.png'
import clickR from '../Img/clickR.png'
import gHub from '../Img/gHub.png'
import luaf from '../Img/luaf.png'
import { useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

export const Portfolio = () => {

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
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const Ttitle = useTransform(scrollYProgress, [0, 1], ["0%", "450%"])
  const x = useTransform(scrollYProgress, [0, 1], ["-100%", "145%"])
  const L = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const R = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])
  const scaleIn = useTransform(scrollYProgress, [0, 1], [1, 3]);
  return (
    <AnimatePresence>
      <div className={style.portfolio} id='portfolio'>
        <div className={style.padding}></div>
        {/* <div className={style.carrocel}>
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
        </div> */}
        <motion.div className={style.parallax} ref={ref} style={{ scale: scaleIn }}>
          <motion.div className={style.title} style={{ y: Ttitle, x: x }}>PROJETOS</motion.div>
          <motion.img src={luaf} className={style.lua} style={{ x: L }} alt='lua' />
          <motion.div className={style.stickL} style={{ x: R }}></motion.div>
        </motion.div>
        {/* ----CONTENT---- */}
        <div className={style.content} >
          {/* FULLSTACK CRUD */}
          <div className={style.contentDiv}>
            <div className={`${style.contentCard} ${style.positionRight}`}>
              <div className={`${style.leftCard} ${style.leftCardRightShow}`}>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7198713825477459969/" target='blank'>
                  <img src={webDONE} className={style.test} alt='web' />
                </a>
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
                    >CRUD</motion.h1>
                  </div>
                  <p>Um simples CRUD que adiciona, edita, e deleta os dados no banco de dados. Usando o NODE, esse é o primeiro de muitos projetos</p>
                </div>
                <div className={`${style.divIcon} ${style.divIconRight}`}>
                  <div className={`${style.goIconDiv} ${style.goIconDivRight}`}>
                    <a href="https://github.com/ArthurJoaquim7/Nodejs-Cadastro" target='blank'><img src={gHub} className={style.goIcon} alt='github' /></a>
                    <motion.img src={clickR} className={`${style.goIcon} ${style.click}`} alt='click'
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
                    <img src={reactC} className={style.tools} alt='tools' />
                    <img src={nodeC} className={style.tools} alt='tools' />
                    <img src={mysqlC} className={style.tools} alt='tools' />
                    <img src={express} className={style.tools} alt='tools' />
                  </div>
                </div>
              </div>
              <div className={`${style.leftCard} ${style.leftCardRight}`}>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7107801763214241792/" target='blank'><img src={webDONE} className={style.test} alt='web' /></a>
              </div>
            </div>
          </div>
          {/* DISCORD */}
          <div className={style.contentDiv}>
            <div className={`${style.contentCard} ${style.positionMiddle}`}>
              <div className={`${style.leftCard} ${style.leftCardMiddle}`}>
                <a href="https://discord-navy.vercel.app/" target='blank'>
                  <img src={discDONE} className={style.test} alt='discord' />
                </a>
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
                  <p>Um dos primeiros desafios em REACT, criei a interface do Discord apenas olhando para o original, consegui aplicar as PROPS e ter mais facilidade de controle dos componentes</p>
                </div>
                <div className={`${style.divIcon} ${style.divIconMiddle}`}>
                  <div className={style.goIconDiv}>
                    <motion.img src={click} className={`${style.goIcon} ${style.click}`} alt='click'
                      initial={{ scale: 0.7 }}
                      whileInView={{
                        scale: [0.7, 1, 0.7], transition: { duration: 2, repeat: Infinity }
                      }}
                      viewport={{
                        once: true,
                      }}
                    />
                    <a href="https://github.com/ArthurJoaquim7/Discord" target='blank'>
                      <img src={gHub} className={style.goIcon} alt='github' />
                    </a>
                  </div>
                  <div className={style.toolsDiv}>
                    <img src={reactC} className={style.tools} alt='tools' />
                    <img src={htmlC} className={style.tools} alt='tools' />
                    <img src={cssC} className={style.tools} alt='tools' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* E-COMMERCE*/}
          <div className={style.contentDiv}>
            <div className={`${style.contentCard} ${style.positionRight}`}>
              <div className={`${style.leftCard} ${style.leftCardRightShow}`}>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7183911890136227841/" target='blank'>
                  <img src={ecoDONE} className={style.test} alt='eco' />
                </a>
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
                  <p>Usando FAKE STORE API, criei esse projeto que foi e está sendo muito importante para mim, consegui por em prática muita teoria e aprender durante o processo</p>
                </div>
                <div className={`${style.divIcon} ${style.divIconRight}`}>
                  <div className={`${style.goIconDiv} ${style.goIconDivRight}`}>
                    <a href="https://github.com/ArthurJoaquim7/E-commerce" target='blank'><img src={gHub} className={style.goIcon} alt='github' /></a>
                    <motion.img src={clickR} className={`${style.goIcon} ${style.click}`} alt='click'
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
                    <img src={reactC} className={style.tools} alt='tools' />
                    <img src={jsC} className={style.tools} alt='tools' />
                    <img src={motionC} className={style.tools} alt='tools' />
                    <img src={htmlC} className={style.tools} alt='tools' />
                    <img src={cssC} className={style.tools} alt='tools' />
                  </div>
                </div>
              </div>
              <div className={`${style.leftCard} ${style.leftCardRight}`}>
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7183911890136227841/" target='blank'>
                  <img src={ecoDONE} className={style.test} alt='eco' />
                </a>
              </div>
            </div>
          </div>
          {/* HBO */}
          <div className={style.contentDiv}>
            <div className={`${style.contentCard} ${style.positionMiddle}`}>
              <div className={`${style.leftCard} ${style.leftCardMiddle}`}>
                <a href="https://arthurjoaquim7.github.io/Catalogo-De-Filmes/" target='blank'>
                  <img src={hboDONE} className={style.test} alt='hbo' />
                </a>
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
                  <p>Um dos primeiros projetos durante o processo de aprendizado, onde eu adicionei(manualmente) cada card de filme, claro que usando API é bem mais simples, mas graças a esse trabalho “repetitivo” eu pude me acostumar com o HTML e CSS</p>
                </div>
                <div className={`${style.divIcon} ${style.divIconMiddle}`}>
                  <div className={style.goIconDiv}>
                    <motion.img src={click} className={`${style.goIcon} ${style.click}`} alt='click'
                      initial={{ scale: 0.7 }}
                      whileInView={{
                        scale: [0.7, 1, 0.7], transition: { duration: 2, repeat: Infinity }
                      }}
                      viewport={{
                        once: true,
                      }}
                    />
                    <a href="https://github.com/ArthurJoaquim7/Catalogo-De-Filmes" target='blank'><img src={gHub} className={style.goIcon} alt='github' /></a>
                  </div>
                  <div className={style.toolsDiv}>
                    <img src={jsC} className={style.tools} alt='tools' />
                    <img src={htmlC} className={style.tools} alt='tools' />
                    <img src={cssC} className={style.tools} alt='tools' />
                  </div>
                </div>
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
              <img src={seta} className={style.seta} alt='seta' />
              Você pode ver todos os meus projetos no meu
              <span className='color'> GITHUB</span>
            </motion.p>
            <motion.a href="https://github.com/ArthurJoaquim7?tab=repositories" target='blank'
              initial={{}}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeatType: "loop", repeat: Infinity, duration: 2, ease: 'easeInOut' }}><img src={seeMoreIcon} className={style.seeMoreImg} alt='seeMore' /></motion.a>
          </motion.div>
        </div>
        <div className={style.line}></div>
      </div>
    </AnimatePresence>
  )
}
