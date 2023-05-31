import React from 'react';
import { BsArrowBarUp } from "react-icons/bs";

const styles = 'text-3xl p-3  bg-gradient-to-r from-[#9060DA] to-[#28A2CF] text-white hover:shadow-inner hover:shadow-gray-200 rounded-full hover:-translate-y-2 transition-all ease-linear';

const scrollUp = () => {
   window.scrollTo(0, 0)
}

const ScrollBar = () => {
  
  return (
    <div className="fixed right-4 bottom-4" style={{zIndex: "1000"}}>
      <button type='button' 
        className={styles}
        onClick={() => scrollUp()}>
        <BsArrowBarUp fontSize={25} />
      </button>
    </div>
  )
}

export default ScrollBar