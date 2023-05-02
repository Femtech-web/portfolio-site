import React from 'react'

const About = ({ darkMode }) => {
  return (
    <div className={`flex py-[5%] flex-col md:flex-row ${darkMode ? 'bg-[#0F1724] text-gray-200' : 'bg-[#fff]' }`}>
        <div className='text-left md:px-[9%] px-4 max-w-[900px] border-r-2 border-indigo-600'>
            <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' }futura 
            font-bold tracking-widest md:max-w-300 max-w-400 text-4xl inline-block 
            pb-4 mb-9 border-b-2 border-indigo-600`}>About me</h1>
            <p className={`${darkMode ? ' text-gray-200' : 'text-slate-700 '} gt md:text-xl text-base`}>Determined professional with planning and implementing high quality websites and web apps. 
            Skilled in frontend and backend web technologies. Proven abilities
            to quickly understand requirements, create innovative solutions and complete projects
            within provided deadlines.
            </p>
        </div>
        <div className="md:flex hidden justify-center items-center vibrate">
            <p className='futura text-2xl ml-10 tracking-[0.4rem] vibrate-1'>You need <span className='text-indigo-500 text-2xl'>Me</span></p>
        </div>
            
    </div>
    
  )
}

export default About