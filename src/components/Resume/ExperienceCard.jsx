import React from "react";
import { VerticalTimelineElement }
from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from "../../utils/styles";



const contentStyles= (darkMode) => { 
    return ({
        color: darkMode ? '#fff' : 'black',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        fontFamily: 'gt'
    })
  };

  const style = {
    title: 'text-[24px] font-bold gt',
    company: (darkMode) => `${darkMode ? 'text-gray-400' : 'text-black/80'} font-semibold text-[16px] gt`,
    point: 'text-white-100 text-[14px] pl-1 tracking-wider gt',
  };

const ExperienceCard = ({ experience, darkMode }) => {
  return (
    <VerticalTimelineElement
      contentStyle={contentStyles(darkMode)}
      contentArrowStyle={{
        borderRight: '7px solid #232631' 
      }}
      date={ experience.date }
      iconStyle={{ 
          background: darkMode ? 'white' : 'rgba(71, 85, 105)' 
          }}

    >
      <div className={`${styles.darkText1(darkMode)} ${style.title}`}>  
        {experience.title}
      </div>
      <p className={style.company(darkMode)} style={{ margin: 0 }}>
        {experience.company}
      </p>
      <ul className=" ml-5 mt-5 list-disc space-y-2 gt">
        {experience.points.map((point, index) => (
          <li 
            key={`experience-point-${index}`}
            className={style.point}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
  }

  export default ExperienceCard
