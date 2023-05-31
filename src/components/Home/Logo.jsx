import React from 'react';
import 'animate.css';
import { styles } from '../../utils/styles';
import {BsFileCode} from 'react-icons/bs';


const style = {
  others:  'max-w-[250px] animate__animated animate__flip animate__delay-1s'
}

const Logo = ({ color, mobile }) => {
  return (
    <div className={`${styles.flexCenter} ${style.others}`}>
      <BsFileCode fontSize={35} className={`${color}`}/>
      <p className={`${mobile ? 'text-2xl' : 'text-4xl'} gt ${color}`}>Fem<span className='text-blue-500'>-Dev</span></p>
    </div>
  )
}

export default Logo