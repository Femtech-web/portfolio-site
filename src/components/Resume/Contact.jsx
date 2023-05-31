import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
import { MdEmail } from 'react-icons/md';
import { BsPhoneLandscape } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im';
import { styles } from '../../utils/styles';
import Box from './Box';

const style = {
    others: 'md:px-[10%] px-[2%]  md:py-[5%] py-[10%]',
};

const Contact = ({ darkMode }) => {
  return (
    <motion.section
        variants={staggerContainer(0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={styles.container3(darkMode)}
    >
        <div className={`${styles.flexCenter} ${styles.flexMobile2} ${style.others}`}>
            <Box icon={ <MdEmail fontSize={40} className='cursor-pointer '/>}
                title='Email' subtitle='BossFemzy10@gmail.com' darkMode={darkMode} id={1}/>
            <Box icon={ <BsPhoneLandscape fontSize={40} className='cursor-pointer' id={2}/>}
            title='Phone' subtitle='+234 8149118596' darkMode={darkMode}/>
            <Box icon={ <ImLocation2 fontSize={40} className='cursor-pointer ' />}
                title='Location' subtitle='Lagos Nigeria' darkMode={darkMode} id={3}/>
        </div>
    </motion.section>
  )
}

export default Contact