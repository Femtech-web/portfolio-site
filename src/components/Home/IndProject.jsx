import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../../utils/styles';
import { BsGithub, BsCursorFill } from 'react-icons/bs';
import { fadeIn } from '../../utils/motion';


const IndProject = ({ index, title, desc, techTitle, technologies, links, imageUrl, glass }) => {
    return (
        <motion.div
            variants={fadeIn('', '', index * 0.5, 0.6)} 
            className={`flex flex-col md:flex-row md:px-[7%] px-4 md:pb-[5%] pb-[10%] 
            ${glass && 'white-glassmorphism mb-[5%] py-[8%]'}`}>
            <div className='flex flex-col justify-center items-start md:w-[50%] w-full'>
                <h1 className='text-gray-200 mb-4 font-semibold  text-[1.6rem] gt '>{title}</h1>
                <p className="text-gray-200 gt md:text-lg text-base">{desc}</p>
                <h3 className="text-gray-200 gt text-xl font-semibold my-2">{techTitle}</h3>
                <ul className='inline-block list-none text-gray-200 gt'>
                    {technologies.map((name) => (
                        <li className={`${styles.gradient} mr-2 inline-block font-black`}>{name}</li>
                    ))}
                </ul>
                <div className='flex my-4'>
                    {links.map((link, index) => (
                        index === 0  ? (<a href={link.url} target="_blank" rel="noopener noreferrer">
                        <button className={`flex justify-center transition-all hover:bg-indigo-400 
                            items-center gt text-gray-200 rounded-full 
                            w-[130px] md:w[150px] p-3 border-2 border-indigo-400`}>
                        {link.name}
                        <BsCursorFill fontSize={20} className={'ml-3 text-gray-200'} />
                        </button>
                    </a>)
                    :(<a href={link.url} target="_blank" rel="noopener noreferrer">
                        <button className={`flex justify-center transition-all hover:bg-indigo-400 
                            items-center gt text-gray-200 rounded-full ml-3
                            w-[130px] md:w[150px] p-3 border-2 border-indigo-400`}>
                        {link.name}
                        <BsGithub fontSize={20} className={'ml-3 text-gray-200'} />
                        </button>
                    </a>)
                    ))}
                </div>
            </div>
            <div className='p-[3%] md:w-[50%] w-full '>
                <div className='w-full h-full flex items-center justify-center md:ml-7 ml-2 md:mt-0 mt-[12%]'>
                    <img src={imageUrl} alt="Shopem" 
                        className='rounded-xl w-full object-contain border-slate-800 border-[10px]' />
                </div>
            </div>
        </motion.div>
    )
};

export default IndProject