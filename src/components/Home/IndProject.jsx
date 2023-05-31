import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../utils/styles';
import { BsGithub, BsCursorFill } from 'react-icons/bs';
import { fadeIn } from '../../utils/motion';

const style = {
    container: (glass) => `gt text-gray-200 md:px-[7%] px-4 md:pb-[5%] pb-[10%] ${glass && 'white-glassmorphism mb-[5%] py-[8%]'}`,
    subCont: 'flex-col md:w-[50%] w-full',
    title: 'mb-4 font-semibold  text-[1.6rem]',
    desc: 'md:text-lg text-base',
    techTitle: 'text-xl font-semibold my-2',
    name: 'mr-2 inline-block font-black',
    btn: 'transition-all hover:bg-indigo-400 rounded-full w-[130px] md:w[150px] p-3 border-2 border-indigo-400',
    imgCont: 'p-[3%] md:w-[50%] w-full',
    imgSubCont: 'w-full h-full  md:ml-7 ml-2 md:mt-0 mt-[12%]',
    img: 'rounded-xl w-full object-contain border-slate-800 border-[10px]',
};


const IndProject = ({ index, title, desc, techTitle, technologies, links, imageUrl, glass }) => {
    return (
        <motion.div
            variants={fadeIn('', '', index * 0.5, 0.6)} 
            className={`${styles.flexMobile2} ${style.container(glass)}`}
        >
            <div className={`${styles.flexStart} ${style.subCont}`}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.desc}>{desc}</p>
                <h3 className={style.techTitle}>{techTitle}</h3>
                <ul className='inline-block list-none'>
                    {technologies.map((name) => (
                        <li className={`${styles.gradient} ${style.name}`}>{name}</li>
                    ))}
                </ul>
                <div className='flex my-4'>
                    {links.map((link, index) => (
                        index === 0  
                        ? (<a href={link.url} target="_blank" rel="noopener noreferrer">
                        <button className={`${styles.flexCenter} ${style.btn}`}>
                        {link.name}
                        <BsCursorFill fontSize={20} className='ml-3 ' />
                        </button>
                    </a>)
                    :(<a href={link.url} target="_blank" rel="noopener noreferrer">
                        <button className={`${styles.flexCenter} ${style.btn} ml-3`}>
                        {link.name}
                        <BsGithub fontSize={20} className='ml-3' />
                        </button>
                    </a>)
                    ))}
                </div>
            </div>

            <div className={style.imgCont}>
                <div className={`${styles.flexCenter} ${style.imgSubCont}`}>
                    <img 
                        src={imageUrl} 
                        alt="Shopem" 
                        className={style.img} 
                    />
                </div>
            </div>
        </motion.div>
    )
};

export default IndProject