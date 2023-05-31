import React from 'react';
import { styles } from '../../utils/styles';
import { BsCursorFill, BsDownload } from 'react-icons/bs';


const style = {
    subNameCont: 'md:w-[50%] w-full md:h-auto h-[70vh]',
    bio: 'mr-2 gt md:text-xl text-base',
};


const Bio = ({ darkMode }) => {
  return (
    <div className={`${styles.flexY} ${style.subNameCont}`}>
        <h1 className={`${styles.gradient} ${styles.title}`}>
            Hello,
        </h1>
        <p className={`${styles.gradient} ${styles.title}`}>
            I'm Adeyemi Oluwafemi
        </p>
        <p className={`${styles.title2} ${styles.darkText1(darkMode)}`}>
            Fullstack Developer
        </p>
        <p className={`${styles.darkText2} ${style.bio}`}>
            Skillful Frontend and backend Web Developer. specialize in competent 
            web development skills with focus on collaboration communication and passion.
        </p>
        <div className='flex mt-4 pr-4'>
            <a href="https://wa.me/08149118596" 
                target="_blank" rel="noopener noreferrer"
            >
                <button className={styles.gitBtn}>
                    Get in touch
                    <BsCursorFill className='ml-2'/>
                </button>
            </a>
            <a href="https://drive.google.com/file/d/140w2V_tmiIN09DSuxN7JSwdRUCgEBRMM/view?usp=drivesdk" 
                target="_blank" rel="noopener noreferrer"
            >
                <button className={styles.dwdBtn}>
                    Download cv
                    <BsDownload className='ml-2'/>
                </button>
            </a>
        </div>
    </div>
  )
}

export default Bio