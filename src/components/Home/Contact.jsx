import React from 'react'

const Contact = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-[#0F1724] text-gray-200' : 'bg-[#fff]' } py-[8%] px-[9%] flex flex-col justify-center items-center `}>
        <div className="h-0.5 w-[90px]  bg-indigo-600 mb-5"></div>
        <div className="flex w-full  rounded-xl flex-col justify-center items-center md:px-[15%] px-2">
            <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } gt text-center md:text-6xl text-5xl font-bold mb-4`}>Lets Work Together</h1>
            <p className="text-xl text-center gt">The technological revolution is changing aspects of our lives 
                and the society itself. Here at Fem-Dev, am ready to give you the best and make you happy.
            </p>
            <a href="https://wa.me/08149118596" target="_blank" rel="noopener noreferrer">
              <button className='flex items-center gt text-xl mr-3 shadow-md mt-6 transition-all
                  bg-indigo-500 px-3 shadow-indigo-400 py-2 rounded-md hover:bg-indigo-400 text-white'>
                  Contact Me
              </button>
            </a>
        </div>
    </div>
  )
}

export default Contact