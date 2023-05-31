import React from 'react';
import { styles } from '../../utils/styles';
import { stats } from "../../dummy";


const style = {
    line: 'h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2',
    stat: 'glassmorphism shadow-2xl mt-5  py-[7%]',
    stat2: 'flex-col border-2 md:w-[180px] w-[200px] md:h-[180px] h-[200px] p-9 rounded-full border-indigo-600 md:my-0 my-[10%]',
    statTitle: (darkMode) => `${darkMode ? ' text-gray-200' : 'text-slate-900'} text-6xl futura font-bold mb-2`,
    statSubtitle: 'text-xl futura text-indigo-400'
};


const Stat = ({ darkMode }) => {
  return (
    <div className={`${styles.flexMobile2} ${styles.flexCenter} ${style.stat}`}>
        {stats.map((item, index) => (
            <>
                {index === 0 || 2 && <div className={style.line}></div>}
                <div className={` ${styles.flexCenter} ${style.stat2}`}>
                    <h1 className={style.statTitle(darkMode)}>
                        {item.title}
                    </h1>
                    <p className={style.statSubtitle}>{item.subtitle}</p>
                </div>
            </>
        ))}
    </div>
  )
}

export default Stat