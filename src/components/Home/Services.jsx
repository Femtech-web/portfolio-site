import React from 'react';
import {AiOutlineDatabase,
AiOutlineAppstore
} from 'react-icons/ai';
import {BsDatabaseFillX} from 'react-icons/bs';
import {DiResponsive} from 'react-icons/di';
import {RiStackLine, RiComputerLine} from 'react-icons/ri'

const Box = ({ icon, title, subtitle}) => {
    return (
            <div className='flex flex-col bg-[#3D3E42] md:p-5 m-5 p-6 md:w-[90%] w-[97%] justify-center 
              rounded-xl items-center cursor-pointer'>
            <div className="w-[100px]  h-[100px] rounded-full
             bg-slate-500 flex justify-center mb-6 items-center">{icon}</div>
            <h3 className="text-gray-200 mb-4 text-center font-semibold text-3xl md:text-[1.4rem] gt">{title}</h3>
            <p className="text-gray-200 gt text-center text-xl md:text-md">{subtitle}</p>
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
            <Box icon={<RiComputerLine fontSize={30} className='text-white'/>} 
            title='Frontend Web-Development'
            subtitle='I specialize in building Beautiful and Dynamic User 
            Interface, leading to an Excellent User Experience'
            />
            <Box icon={<AiOutlineDatabase fontSize={30} className='text-white'/>} 
            title='Backend Web-Development'
            subtitle='I specialize in Implementing logics at the 
            backend for easy storage and fetching of data and other backend operations'
            />
            <Box icon={<RiStackLine fontSize={30} className='text-white'/>} 
            title='Fullstack Web-Development'
            subtitle='I can play the role of a frontend and backend software engineer 
            interchangeably, giving you a flexible and easy service rendation'
            />
            <Box icon={<AiOutlineAppstore fontSize={30} className='text-white'/>} 
            title='Web-Apps Developement'
            subtitle='I also specialize in the development of highly 
            functional and flexible Web apps for every of your needs. you can trust me on this! '
            />
            <Box icon={<BsDatabaseFillX fontSize={30} className='text-white'/>} 
            title='Distributted Apps (DAPPS)'
            subtitle='Web 3.0 Technolology has the ability to change the internet now and in the future.
            I build decentralized apps which can be connected with the blockchain through smart contracts.'
            />
            <Box icon={<DiResponsive fontSize={35} className='text-white'/>} 
            title='Responsive Web Service'
            subtitle='I not only just render Web Services but deliver Responsive Web Service which can be fully 
            suitable and on both Desktop and Mobile Devices, giving you a great User Experience'
            />
        </div>
    </div>
    
  )
}

export default Services