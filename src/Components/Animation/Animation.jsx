import { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export const Animation = ({ delay, children }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.5, delay }}
        >
            {children}
        </motion.div>
    );
};
