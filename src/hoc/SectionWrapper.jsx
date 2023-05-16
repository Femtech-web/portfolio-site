import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component) => {
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer(0.3, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <Component />
            </motion.section>
        )
    }

    return HOC;
}

export default SectionWrapper