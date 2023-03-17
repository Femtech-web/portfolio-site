import React from 'react'

const Contact = ({ darkMode}) => {
  return (
    <div className={`${darkMode ? 'bg-[#0F1724] text-gray-200' : 'bg-[#fff]' } 
        flex flex-col justify-center items-center px-[7%] py-[5%]`}>
        <div className="h-0.5 w-[90px]  bg-indigo-600 mb-5"></div>
            <div className="flex w-full  rounded-xl flex-col justify-center items-center md:px-[15%] px-2">
                <h1 className={` gt text-center text-6xl font-bold mb-4`}>Lets Connect For Business</h1>
                <p className={`${darkMode ? ' text-gray-200' : 'text-slate-600' } 
                    text-xl text-center md:px-[15%] px-[5%] gt`}>The technological revolution is changing aspects of our lives 
                    and the society itself. Here at Fem-Dev, I have got you fully Covered.
                </p>
                <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
                  <button className='flex items-center gt text-xl mr-3 shadow-md mt-4 transition-all
                      bg-indigo-500 px-3 shadow-indigo-400 py-2 rounded-md hover:bg-indigo-400 text-white'>
                      Contact Me
                  </button>
                </a>
         </div>
    </div>
  )
}

export default Contact