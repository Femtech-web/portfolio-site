import React from 'react';


const Body = ({ darkMode }) => {
  return (
    <>
    <div className={`${darkMode ? 'bg-[#0F1724] text-gray-200' : 'bg-[#fff]' } flex flex-col px-[10%] py-[5%]`}>
        <div className="flex md:flex-row flex-col justify-center  items-center md:mb-6 mb-5">
            <div className='flex flex-col max-w-[300px] md:mb-[5rem] mb-8 items-center justify-center mr-4'>
                <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } futura font-bold tracking-widest 
                    text-4xl inline-block 
                pb-2 `}>Career Objective</h1>
                <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
            </div>
            <p className={`${darkMode ? ' text-gray-200' : 'text-slate-600' } p-7 gt text-xl white-glassmorphism italic`}>
              Determined professional with planning and implementing high quality websites and web apps.
              Skilled in frontend and backend web technologies. Proven abilities to quickly understand
              requirements, create innovative solutions and complete projects within provided deadlines.
            </p>
        </div>
        <div className="flex flex-col ">
            <div className="w-full flex items-center justify-center ">
                <div className='flex flex-col max-w-[300px] md:mb-[5rem] mb-8 w-full items-center justify-center mr-4'>
                    <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } futura font-bold 
                        tracking-widest text-4xl inline-block 
                    pb-2 `}>Experiences</h1>
                    <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
                </div>
            </div>
            
            <div className="flex flex-col mb-5">
                <h3 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } gt text-3xl mb-4 font-medium`}>Personal Projects</h3>

                <ul className={`list-disc md:ml-0 ml-1 ${darkMode ? ' text-gray-200' : 'text-slate-600' }`}>
                    <li className='gt  md:text-xl text-2xl'>Improved in problem definition, planning and providing solutions</li>
                    <li className=' gt  md:text-xl text-2xl '>Improved in time management and system maintenance</li>
                    <li className='gt  md:text-xl text-2xl '>Developed several successful projects, personal and collaborative.</li>
                </ul>
            </div>

            <div className="flex flex-col mb-5 md:ml-0 ml-1">
                <h3 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } gt text-3xl mb-2 font-medium`}>Fullstack MERN Developer</h3>
                <h6 className={`${darkMode ? ' text-gray-200' : 'text-slate-700' } gt text-xl mb-2 font-medium`}>Femtech, August 2022 - December 2022</h6>

                <ul className={`${darkMode ? ' text-gray-200' : 'text-slate-600' } list-disc`}>
                    <li className='gt md:text-xl  text-2xl'>Demonstrated ability to manage multiple tasks while remaining adaptable and flexible</li>
                    <li className='gt md:text-xl  text-2xl'>Experienced with social media and communication platforms</li>
                    <li className='gt md:text-xl  text-2xl'>Defined problems, collected data, established facts and validated conclusions.</li>
                    <li className='gt md:text-xl  text-2xl'>Detected and reported larger technical issues.</li>
                    <li className='gt md:text-xl  text-2xl'>Skilled in using various web technologies such as React, 
                        Redux, Mongo-DB, express, Node-JS, Bootstrap etc.</li>
                </ul>
            </div>

            <div className="flex">
                <div className="w-full flex items-center justify-center ">
                    <div className='flex flex-col max-w-[300px] mb-[3rem] w-full items-center justify-center mr-4'>
                        <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } futura font-bold tracking-widest 
                            text-4xl inline-block 
                        pb-2 `}>Education</h1>
                        <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
                    </div>
                </div>
            </div>

            <h3 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } gt text-3xl md:mb-4 mb-8`}>National Diploma in computer science 
                OGITECH (Ogun state institute of Technology), Igbesa, Ogun State.
            </h3>

            <div className="flex flex-col mb-5 md:ml-0 ml-1">
                <h3 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } gt text-3xl mb-2 font-medium`}>Soft Skills</h3>
                <ul className={`${darkMode ? ' text-gray-200' : 'text-slate-600' } list-disc`}>
                    <li className='gt md:text-xl text-2xl'>Good communication skills</li>
                    <li className='gt md:text-xl text-2xl'>Quick learning and Adapting skills</li>
                    <li className='gt md:text-xl text-2xl'>Problem solving skills</li>
                    <li className='gt md:text-xl text-2xl'>Good collaborative skills</li>
                </ul>
            </div>
        </div>

        <div className='flex md:flex-row flex-col glassmorphism shadow-2xl mt-5 justify-center items-center py-[7%]'>
                <div className="flex justify-center items-center md:my-0 my-[10%]
                    flex-col border-2 md:w-[180px] w-[200px] md:h-[180px] h-[200px] p-9 rounded-full border-indigo-600">
                        <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-900' } text-6xl futura font-bold mb-2`}>2Years</h1>
                        <p className='text-xl futura text-indigo-400'>Experience</p>
                </div>
                <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 ml-6"></div>
                <div className="flex justify-center items-center flex-col border-2 
                   md:w-[180px] w-[200px] md:h-[180px] h-[200px] p-9 rounded-full border-indigo-600 md:my-0 my-[10%]">
                        <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-900' } text-6xl futura font-bold mb-2`}>15+</h1>
                        <p className='text-xl futura text-indigo-400'>Projects</p>
                </div>
                <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 ml-6"></div>
                <div className="flex justify-center items-center flex-col border-2 md:w-[180px] 
                    w-[200px] md:h-[180px] h-[200px] p-9 rounded-full border-indigo-600 md:my-0 my-[10%]">
                        <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-900' } text-6xl futura font-bold mb-2`}>Good</h1>
                        <p className='text-xl futura text-indigo-400'>Reviews</p>
                </div>
        </div>
    </div>
    </>
  )
}

export default Body