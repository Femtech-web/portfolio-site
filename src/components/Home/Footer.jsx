import React from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className='flex items-center py-10 px-[5%] bg-[#0F1724] w-full'>
            <div className='justify-between  flex items-center w-full '>
                <Logo  color={'text-gray-200'} mobile={true}/>
                <p className="gt text-md hidden md:block text-gray-200">@2023 Bossfemzy10@gmail.com.All Rights reserved</p>
                <div className='flex justify-center items-center'>
                    <a href="https://github.com/Femtech-web" target="_blank" rel="noopener noreferrer">
                      <BsGithub fontSize={25} className='text-gray-200 mr-4 hover:scale-75 
                        transition-all cursor-pointer'/> 
                    </a>
                    <a href="https://www.linkedin.com/in/adeyemi-femi-176302244" 
                      target="_blank" rel="noopener noreferrer">
                     <BsLinkedin fontSize={25} className='text-gray-200 mr-4 hover:scale-75 
                      transition-all cursor-pointer'/> 
                    </a>
                    <a href="https://www.instagram.com/bossfemzy" target="_blank" rel="noopener noreferrer">
                     <BsInstagram fontSize={25} className='text-gray-200 mr-4 hover:scale-75 
                      transition-all cursor-pointer'/>
                    </a>
                </div>
            </div>
    </div>
  )
}

export default Footer