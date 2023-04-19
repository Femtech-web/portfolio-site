import React from 'react';
import { servicesData } from '../../dummy';

const Box = ({ icon, title, subtitle}) => {
    return (
      <div className='flex flex-col bg-[#3D3E42] hover:shadow-inner hover:shadow-indigo-500 transition-all
        md:p-5  m-5 p-7 md:w-[90%] w-[97%] justify-center group
        rounded-xl items-center cursor-pointer'>
      <div className="w-[100px]  h-[100px] rounded-full transition-all
        bg-slate-500 flex justify-center mb-6 items-center 
        group-hover:shadow-inner group-hover:shadow-gray-200">{icon}</div>
      <h3 className="text-gray-200 mb-4 text-center font-semibold text-[1.4rem] gt">{title}</h3>
      <p className="text-gray-200 gt text-center text-base whitespace-normal">{subtitle}</p>
      </div>
    )
}

const Services = () => {
  return (
    <div className='flex flex-col md:pr-[7%] pr-[7%] pl-[1%] 
        md:pl-[7%] justify-center items-center bg-[#0F1724] md:py-[3%] py-[5%]'>
        <div className='flex flex-col max-w-[300px] mb-[5rem] items-center justify-center'>
            <h1 className="futura font-bold tracking-widest text-4xl inline-block text-gray-200
            pb-2 ">Services I Offer</h1>
            <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1">
        {servicesData.map((item, index) => (
          <Box  
           key={index}
           icon={item.icon}
           title={item.title}
           subtitle={item.subtitle}
          />
        ))}
        </div>
    </div>
    
  )
}

export default Services