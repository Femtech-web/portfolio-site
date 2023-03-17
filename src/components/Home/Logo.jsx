import React from 'react';
import 'animate.css';
import {BsFileCode} from 'react-icons/bs';


const Logo = ({ color, mobile }) => {
  return (
    <div className='flex  max-w-[250px] justify-center items-center 
      animate__animated animate__flip animate__delay-1s'>
      <BsFileCode fontSize={35} className={`${color}`}/>
      <p className={`${mobile ? 'text-2xl' : 'text-4xl'} gt ${color}`}>Fem<span className='text-blue-500'>-Dev</span></p>
    </div>
  )
}

export default Logo