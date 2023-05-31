import React from 'react'
import { styles } from '../../utils/styles'


const style = {
    subCont: 'flex-col max-w-[300px] md:mb-[5rem] mb-8 mr-4 w-full',
    line: 'h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2',
    obj: 'p-7 gt text-xl white-glassmorphism italic',
};


const CareerObj = ({ darkMode }) => {
  return (
    <div className={`${styles.flexMobile2} ${styles.flexCenter} md:mb-6 mb-5`}>
    <div className={`${styles.flexCenter} ${style.subCont}`}>
        <h1 className={styles.headingH1Two(darkMode)}>
            Career Objective
        </h1>
        <div className={style.line}></div>
    </div>
    <p className={`${styles.darkText2(darkMode)} ${style.obj}`}
    >
      Determined professional with planning and implementing 
      high quality websites and web apps.
      Skilled in frontend and backend web technologies.
      Proven abilities to quickly understand
      requirements, create innovative solutions and complete 
      projects within provided deadlines.
    </p>
</div>

  )
}

export default CareerObj