import React from 'react';
import Slider from  "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsGithub, BsCursorFill } from 'react-icons/bs';
import { projectData } from '../../dummy';

export const IndProject = ({ title, desc, techTitle, technologies, links, imageUrl, glass }) => {
    return (
        <div className={`flex flex-col md:flex-row md:px-[7%] px-4 md:pb-[5%] pb-[10%] 
            ${glass && 'white-glassmorphism mb-[5%] py-[8%]'}`}>
            <div className='flex flex-col justify-center items-start md:w-[50%] w-full'>
                <h1 className='text-gray-200 mb-4 font-semibold  text-[1.6rem] gt '>{title}</h1>
                <p className="text-gray-200 gt md:text-lg text-base">{desc}</p>
                <h3 className="text-gray-200 gt text-xl font-semibold my-2">{techTitle}</h3>
                <ul className='inline-block list-none text-gray-200 gt'>
                    {technologies.map((name) => (
                        <li className='mr-2 inline-block bg-gradient-to-r 
                        from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black' >{name}</li>
                    ))}
                </ul>
                <div className='flex my-4'>
                    {links.map((link, index) => (
                        index === 0  ? (<a href={link.url} target="_blank" rel="noopener noreferrer">
                        <button className={`flex justify-center transition-all hover:bg-indigo-400 
                            items-center gt text-gray-200 rounded-full 
                            w-[130px] md:w[150px] p-3 border-2 border-indigo-400`}>
                        {link.name}
                        <BsCursorFill fontSize={20} className={'ml-3 text-gray-200'} />
                        </button>
                    </a>)
                    :(<a href={link.url} target="_blank" rel="noopener noreferrer">
                        <button className={`flex justify-center transition-all hover:bg-indigo-400 
                            items-center gt text-gray-200 rounded-full ml-3
                            w-[130px] md:w[150px] p-3 border-2 border-indigo-400`}>
                        {link.name}
                        <BsGithub fontSize={20} className={'ml-3 text-gray-200'} />
                        </button>
                    </a>)
                    ))}
                </div>
            </div>
            <div className='p-[3%] md:w-[50%] w-full '>
                <div className='w-full h-full flex items-center justify-center md:ml-7 ml-2 md:mt-0 mt-[12%]'>
                    <img src={imageUrl} alt="Shopem" 
                        className='rounded-xl w-full object-contain border-slate-800 border-[10px]' />
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        initialSlide: 0,
    }
  return (
    <div className='flex flex-col px-[3%] py-[2%] bg-[#0F1724]'>
        <div className='flex flex-col max-w-[300px] mb-[5rem] items-center justify-center'>
            <h1 className="futura font-bold tracking-widest text-4xl inline-block text-gray-200
            pb-2 ">Recent Projects</h1>
            <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
        </div>

        <div>
            <Slider {...settings}>
                {projectData.map((item, index) => (
                        <IndProject key={index} {...item} />
                    ))}
            </Slider>
        </div> 
    </div>
  )
}

export default Projects
