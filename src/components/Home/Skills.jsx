import React from 'react';
import { DiHtml5, DiCss3,
DiJavascript, DiBootstrap,
DiNodejs, DiDatabase,
DiMongodb, DiGit,
DiGithubBadge, DiMailchimp,
DiNpm, DiJqueryLogo,
DiReact, DiFirebase} from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';
import {SiMui, SiSolidity,
SiTailwindcss, SiPassport,
SiExpress, SiAuth0,
SiRedux,
SiWeb3Dotjs} from 'react-icons/si';


const Box = ({ icon, title}) => {
    return (
        <div className="flex flex-col justify-between 
            items-center shadow-md bg-gray-200 mx-4 px-6 py-4 rounded-xl">
            { icon }
            <p className="text-3xl acumin text-slate-400 tracking-widest">{ title }</p>
        </div>
    )
}
const Skills = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-[#0F1724] ' : 'bg-[#fff]' } py-[5%] `}>
        <div className="flex flex-col justify-center items-start w-full overflow-hidden">
            <div className="flex flex-col w-full justify-center items-center mb-[4rem]">
                <h1 className={`${darkMode ? ' text-gray-200' : 'text-slate-800' } futura font-bold 
                tracking-widest text-4xl inline-block  
                pb-2 `}>Tools I Use</h1>
                <div className="h-0.5 w-[120px] bg-indigo-600 mt-2"></div>
            </div>
            <div className="flex flex-col ">
                <div className="flex swipe mb-10">
                    <Box icon={ <DiHtml5 fontSize={80} className='text-slate-500 mb-4'/> } title='HTML' />
                    <Box icon={ <DiCss3 fontSize={80} className='text-slate-500 mb-4'/> } title='CSS' />
                    <Box icon={ <DiJavascript fontSize={80} className='text-slate-500 mb-4'/> } title='Javascript' />
                    <Box icon={ <DiReact fontSize={80} className='text-slate-500 mb-4'/> } title='React' />
                    <Box icon={ <TbBrandNextjs fontSize={80} className='text-slate-500 mb-4'/> } title='Nextjs' />
                    <Box icon={ <DiBootstrap fontSize={80} className='text-slate-500 mb-4'/> } title='Bootstrap' />
                    <Box icon={ <SiTailwindcss fontSize={80} className='text-slate-500 mb-4'/> } title='TailwindCss' />
                    <Box icon={ <DiJqueryLogo fontSize={80} className='text-slate-500 mb-4'/> } title='JQuery' />
                    <Box icon={ <SiMui fontSize={80} className='text-slate-500 mb-4'/> } title='MaterialUi' />
                    <Box icon={ <SiAuth0 fontSize={80} className='text-slate-500 mb-4'/> } title='Auth0' />
                    <Box icon={ <SiSolidity fontSize={80} className='text-slate-500 mb-4'/> } title='Solidity' />
                </div>
                <div className="flex swipe-back ">
                    <Box icon={ <DiNodejs fontSize={80} className='text-slate-500 mb-4'/> } title='NodeJs' />
                    <Box icon={ <DiMongodb fontSize={80} className='text-slate-500 mb-4'/> } title='MongoDb' />
                    <Box icon={ <DiNpm fontSize={80} className='text-slate-500 mb-4'/> } title='Npm' />
                    <Box icon={ <SiExpress fontSize={80} className='text-slate-500 mb-4'/> } title='ExpressJs' />
                    <Box icon={ <SiRedux fontSize={80} className='text-slate-500 mb-4'/> } title='ReduxToolkit' />
                    <Box icon={ <DiDatabase fontSize={80} className='text-slate-500 mb-4'/> } title='Mongoose' />
                    <Box icon={ <DiGithubBadge fontSize={80} className='text-slate-500 mb-4'/> } title='Github' />
                    <Box icon={ <DiGit fontSize={80} className='text-slate-500 mb-4'/> } title='Git' />
                    <Box icon={ <DiFirebase fontSize={80} className='text-slate-500 mb-4'/> } title='Firebase' />
                    <Box icon={ <SiPassport fontSize={80} className='text-slate-500 mb-4'/> } title='PassportJs' />
                    <Box icon={ <SiWeb3Dotjs fontSize={80} className='text-slate-500 mb-4'/> } title='Web3.Js' />
                    <Box icon={ <DiMailchimp fontSize={80} className='text-slate-500 mb-4'/> } title='Mailchimp' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills