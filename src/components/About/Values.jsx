import React from 'react';
import { values } from '../../dummy';

const Box = ({ icon, title, subtitle, darkMode}) => {
    return (
        <div className='flex flex-col md:mr-5 mr-0 md:mb-0 mb-[15%] px-[1%] py-3 items-center shadow-xl 
            white-glassmorphism rounded-xl'>
                <div className=' flex justify-center items-center mb-5
                    w-[140px] h-[140px] border-2 border-indigo-500 rounded-full'>{ icon }
                </div>
                <h3 className=' gt md:text-3xl text-4xl mb-3 tracking-widest font-bold'>{title}</h3>
                <p className={`${darkMode ? ' text-gray-200' : 'text-slate-600' } 
                    gt md:px-[20%] px-[10%] text-center md:text-lg text-xl`}>{subtitle}</p>
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
            {values.map((item, index) => (
                <Box darkMode={darkMode} icon={item.icon} key={index}
                title={item.title} subtitle={item.subtitle} />
            ))}
        </div>
    </div>
  )
}

export default Values