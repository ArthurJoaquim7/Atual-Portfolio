import { useState, useEffect, useRef } from 'react';
import style from './Header.module.css';
import logo2 from '../Img/logo2.png';
import menuButton from '../Img/menuButton.png';
import closed from '../Img/closed.png';
import { Home } from '../Home/Home';
import { About } from '../About/About';
import { Portfolio } from '../Portfolio/Portfolio';
import { Contact } from '../Contact/Contact';
import { Parallax } from '../Parallax/Parallax';
import { Padding } from '../Padding/Padding';
// ===
import { motion, AnimatePresence } from 'framer-motion'

export const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visible, setVisible] = useState(true);
    const [showMenu, setShowMenu] = useState(false)

    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

    const handleScroll = () => {
        const currentPosition = window.pageYOffset;
        setVisible(scrollPosition > currentPosition);
        setScrollPosition(currentPosition);
    };

    const scrollToRef = (ref) => {
        const target = ref.current;
        const startPosition = window.pageYOffset;
        const targetPosition = target.offsetTop;
        const distance = targetPosition - startPosition;
        const duration = 3000; // Define a duração da animação em milissegundos

        let start = null;

        const animation = (currentTime) => {
            if (!start) start = currentTime;
            const timeElapsed = currentTime - start;
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animation);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const handleMenu = () => {
        setShowMenu(true)
        if (showMenu == true) {
            setShowMenu(false)
        }
    }

    return (
        <>
            <div className={`${style.header} ${visible ? style.visible : style.hidden}`}>
                <div className={style.links}>
                    <ul>
                        <div>
                            <div className={style.logoCircle}></div>
                            <img src={menuButton} className={style.menuButton} onClick={handleMenu} />
                        </div>
                    </ul>
                </div>
            </div>
            <AnimatePresence>
                {
                    showMenu && (
                        <motion.div className={style.menuDiv}
                            initial={{ opacity: 0.5, y: -1000 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            exit={{ opacity: 0.5, y: -1000, transition: { delay: 1.3 } }}
                        >
                            <ul>
                                <motion.li onClick={handleMenu}
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 3, delay: 0.5, type: 'spring', stiffness: 300 }}
                                    exit={{
                                        opacity: 0.5, y: -1000,
                                        transition: { duration: 1, delay: 0.4, }
                                    }}
                                >
                                    <p onClick={() => scrollToRef(homeRef)} className={`${style.a} ${style.aMenu}`}>Home</p>
                                </motion.li>
                                <motion.li onClick={handleMenu}
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 3, delay: 0.7, type: 'spring', stiffness: 300 }}
                                    exit={{
                                        opacity: 0.5, y: -1000,
                                        transition: { duration: 1, delay: 0.5, }
                                    }}
                                >
                                    <p onClick={() => scrollToRef(aboutRef)} className={`${style.a} ${style.aMenu}`}>About</p>
                                </motion.li>
                                <motion.li onClick={handleMenu}
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 3, delay: 0.9, type: 'spring', stiffness: 300 }}
                                    exit={{
                                        opacity: 0.5, y: -1000,
                                        transition: { duration: 1, delay: 0.6, }
                                    }}
                                >
                                    <p onClick={() => scrollToRef(portfolioRef)} className={`${style.a} ${style.aMenu}`}>Portfolio</p>
                                </motion.li>
                                <motion.li onClick={handleMenu}
                                    initial={{ opacity: 0, scale: 1.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 3, delay: 1, type: 'spring', stiffness: 300 }}
                                    exit={{
                                        opacity: 0.5, y: -1000,
                                        transition: { duration: 1, delay: 0.8, }
                                    }}
                                >
                                    <p onClick={() => scrollToRef(contactRef)} className={`${style.a} ${style.aMenu}`}>Contact</p>
                                </motion.li>
                            </ul>
                            <img src={closed} className={style.closed} onClick={handleMenu} />
                        </motion.div>
                    )
                }
            </AnimatePresence >

            <div ref={homeRef}><Home /></div>
            <div ref={aboutRef}><About /></div>
            <div ref={portfolioRef}><Portfolio /></div>
            <div><Parallax /></div>
            <div><Padding /></div>
            <div ref={contactRef}><Contact /></div>
        </>
    );
};
