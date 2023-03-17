import React from 'react';
import { BsSquare } from 'react-icons/bs';
import { MdHighQuality } from 'react-icons/md';
import { GiDart } from 'react-icons/gi';

const Box = ({ icon, title, subtitle, darkMode}) => {
    return (
        <div className='flex flex-col md:mr-5 mr-0 md:mb-0 mb-[15%] px-[2%] py-3 items-center shadow-xl 
            white-glassmorphism rounded-xl'>
                <div className=' flex justify-center items-center mb-5
                    w-[140px] h-[140px] border-2 border-indigo-500 rounded-full'>{ icon }
                </div>
                <h3 className=' gt md:text-3xl text-4xl mb-3 tracking-widest font-bold'>{title}</h3>
                <p className={`${darkMode ? ' text-gray-200' : 'text-slate-600' } 
                    gt px-[20%] text-center md:text-lg text-xl`}>{subtitle}</p>
        </div>
    )
};

const Values = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-[#0F1724] text-gray-200' : 'bg-[#fff]' } 
        px-[7%] md:py-[5%] py-[15%] flex flex-col`}>
        <div className="flex justify-center items-center md:mb-[5%] mb-[15%]">
            <div className='h-1 w-[100px] bg-indigo-600 mr-2'></div>
            <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } futura text-7xl`}>Values</h1>
        </div>
        <div className='flex md:flex-row flex-col justify-center items-center'>
            <Box darkMode={darkMode} icon={ <MdHighQuality fontSize={40} className='cursor-pointer  '/>}
            title='Quality' subtitle='I am are Dedicated to giving you quality High service worthy of Accolade' />
            <Box darkMode={darkMode} icon={ <GiDart fontSize={40} className='cursor-pointer  '/>}
            title='Accuracy' subtitle='I take Priority in delivering services at the appropiate and given time for continous service' />
            <Box darkMode={darkMode} icon={ <BsSquare fontSize={40} className='cursor-pointer  '/>}
            title='Transparency' subtitle='You can trust me when it comes to being sincere and transparent in giving out service' />
        </div>
    </div>
  )
}

export default Values