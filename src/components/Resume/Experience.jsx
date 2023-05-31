import React from 'react';
import { styles } from '../../utils/styles';
import ExperienceCard from './ExperienceCard';
import { Experiences, softSkill } from "../../dummy";
import { VerticalTimeline }
from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';


const style = {
    subCont: 'flex-col max-w-[300px] md:mb-[5rem] mb-8 mr-4 w-full',
    line: 'h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2',
    exp: 'flex-col max-w-[300px] md:mb-[5rem] mb-8 w-full mr-4',
    sch: 'md:text-3xl text-2xl md:mb-4 mb-8',
    skill: 'text-3xl mb-2 font-medium',
};


const Experience = ({ darkMode }) => {
  return (
    <div className={styles.flexY}>
        <div 
            className={`${styles.flexCenter} w-full`}>
            <div className={`${styles.flexCenter} ${style.exp}`}>
                <h1 className={styles.headingH1Two(darkMode)}>
                    Experiences
                </h1>
                <div className={style.line}></div>
            </div>
        </div>
        
        <div className={`${styles.flexY} my-10`}>
            <VerticalTimeline>
            {Experiences.map((experience, index) => (
                <ExperienceCard 
                key={index}
                experience={experience}
                darkMode={darkMode}
                />
            ))}
            </VerticalTimeline>
        </div>

        <div className="flex">
            <div className={`${styles.flexCenter} w-full`}>
                <div className={`${styles.flexCenter} ${style.subCont}`}>
                    <h1 className={styles.headingH1Two(darkMode)}>
                        Education
                    </h1>
                    <div className={style.line}></div>
                </div>
            </div>
        </div>

        <h3 className={`${styles.darkText1(darkMode)} ${style.sch}`}
        >
            National Diploma in computer science 
            OGITECH (Ogun state institute of Technology), Igbesa, Ogun State.
        </h3>

        <div className="flex flex-col mb-5 md:ml-0 ml-1">
            <h3 className={`${styles.darkText1(darkMode)} ${style.skill}`}>Soft Skills</h3>
            <ul className={`${styles.darkText2(darkMode)} list-disc`}
            >
                {softSkill.map((text) => (
                <li className='text-xl'>{text}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Experience