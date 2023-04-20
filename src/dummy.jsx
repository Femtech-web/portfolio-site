import {BsDatabaseFillX, BsGithub, BsFacebook, BsSquare,
BsInstagram, BsWhatsapp, BsTwitter} from 'react-icons/bs';
import {DiResponsive} from 'react-icons/di';
import {RiStackLine, RiComputerLine} from 'react-icons/ri'
import {AiOutlineDatabase,
AiOutlineAppstore
} from 'react-icons/ai';
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
import { MdHighQuality } from 'react-icons/md';
import { GiDart } from 'react-icons/gi';


export const projectData = [
    {
        title: 'Shopem E-commerce Site',
        desc: 'Shopem E-commerce Website is a Responsive web store. They deal in selling of Male, Female and Unisex Fashion Outfits. customers can Register and Login, View  Preferred Choice of Outfit from Different Brands, Purchase Outfit and It will be delivered to them in a short while.It has a Register and Login Page, HomePage, ProductList page, Individual Product Page, Cart Page, Customer Details Page, Payment Page, Success and Error Page.',
        techTitle: 'Web Technologies Used',
        technologies: [
            "React", "Styled-Components", "Material-Ui", "Redux-Toolkit", "ExpressJs", "Mongodb"
        ],
        links: [
            {
                url: "https://shopem-7029.onrender.com",
                name: "Demo"
            },
            {
                url: "https://github.com/Femtech-web/SHOPEM",
                name: "Github"
            }
        ],
        imageUrl: "/images/shopem.png"
    },
    {
        title: 'Crypt Decentralized App',
        desc: 'Crypt Web App is a Decentralized Application which runs on the Blockchain. It was Built for the purpose of Security, Decentralization and trust. It enables Users after Connecting there wallet through Metamask to send Ethers/Tokens to any other Crypto Address anywhere around the world. Metamask enables Users to Sign in there Ethereum Wallet Address to connect to the blockchain for transactions Users can Connect there Wallet, Send Ethereum Ethers and See list of Recent Transactions. There is a Homepage, and Guide page to enable android users install metamask and use the web App on Android Devices.',
        techTitle: 'Web Technologies Used',
        technologies: [
            "React", "TailwindCss", "React-Icons", "Solidity", "Giphy"
        ],
        links: [
            {
                url: "https://crypt-blockchain.onrender.com",
                name: "Demo"
            },
            {
                url: "https://github.com/Femtech-web/blockchain",
                name: "Github"
            }
        ],
        imageUrl: "/images/crypt.png"
    },
    {
        title: 'Sharaz Dashboard',
        desc: 'Crypt Web App is a Decentralized Application which runs on the Blockchain. It was Built for the purpose of Security, Decentralization and trust. It enables Users after Connecting there wallet through Metamask to send Ethers/Tokens to any other Crypto Address anywhere around the world. Metamask enables Users to Sign in there Ethereum Wallet Address to connect to the blockchain for transactions Users can Connect there Wallet, Send Ethereum Ethers and See list of Recent Transactions. There is a Homepage, and Guide page to enable android users install metamask and use the web App on Android Devices.',
        techTitle: 'Web Technologies Used',
        technologies: [
            "React", "TailwindCss", "React-Icons", "Recharts", "React-Slick", "Materia-Ui"
        ],
        links: [
            {
                url: "https://sharaz-dashboard.onrender.com",
                name: "Demo"
            },
            {
                url: "https://github.com/Femtech-web/sharaz-dashboard",
                name: "Github"
            }
        ],
        imageUrl: "/images/sharaz.png"
    },
    {
        title: 'Bible Web App',
        desc: 'Bible Web App was not much of a beautiful site but rather it was used to implement some really important backend functions such like Authentication and security. It is a web App with which enables Users to Register then login before accessing the main Homepage interface which lists some bible verse foe different situations of Users. Strictly only when Users have logged before they can access the main page. They can also log out. It has a landing page, Register and login page and Homepage.',
        techTitle: 'Web Technologies Used',
        technologies: [
            "HTML", "CSS", "Bootstrap", "Ejs", "ExpressJs", "Mongodb", "PassportJs", "Auth02"
        ],
        links: [
            {
                url: "https://bible-app.onrender.com",
                name: "Demo"
            },
            {
                url: "https://github.com/Femtech-web/bible-webApp",
                name: "Github"
            }
        ],
        imageUrl: "/images/bible.png"
    }
]

export const servicesData = [
    {
        title:'Frontend Web Development',
        subtitle:'I specialize in building Beautiful and Dynamic User Interface leading to an Excellent User Experience',
        icon:<RiComputerLine fontSize={30} className='text-white'/>
    },
    {
        title:'Backend Web Development',
        subtitle:'I specialize in Implementing logics at the backend for easy storage and fetching of data and other backend operations',
        icon:<AiOutlineDatabase fontSize={30} className='text-white'/>
    },
    {
        title:'Fullstack Web Development',
        subtitle:'I can play the role of a frontend and backend software engineer interchangeably, giving you a flexible and easy service rendation',
        icon:<RiStackLine fontSize={30} className='text-white'/>
    },
    {
        title:'Web-Apps Developement',
        subtitle:'I also specialize in the development of highly functional and flexible Web apps for every of your needs. you can trust me on this!',
        icon:<AiOutlineAppstore fontSize={30} className='text-white'/>
    },
    {
        title:'Distributted Apps (DAPPS)',
        subtitle:'Web 3.0 Technolology has the ability to change the internet now and in the future.I build decentralized apps which can be connected with the blockchain through smart contracts.',
        icon:<BsDatabaseFillX fontSize={30} className='text-white'/>
    },
    {
        title:'Responsive Web Service',
        subtitle:'I not only just render Web Services but deliver Responsive Web Service which can be fully suitable and on both Desktop and Mobile Devices, giving you a great User Experience',
        icon:<DiResponsive fontSize={35} className='text-white'/>
    }
]

export const skillsData = [
{
icon: <DiHtml5 fontSize={80} className='text-slate-500 mb-4 '/>,
title:'HTML', 
},
{
icon: <DiCss3 fontSize={80} className='text-slate-500 mb-4'/>,
title: 'CSS',
},   
{
icon: <DiJavascript fontSize={80} className='text-slate-500 mb-4'/>,  
title: 'Javascript',
},
{
icon: <DiReact fontSize={80} className='text-slate-500 mb-4'/>,
title: 'React',
},  

{
icon: <TbBrandNextjs fontSize={80} className='text-slate-500 mb-4'/>, 
title: 'Nextjs',
},
{
icon: <DiBootstrap fontSize={80} className='text-slate-500 mb-4'/>, 
title: 'Bootstrap',
},
{
icon: <SiTailwindcss fontSize={80} className='text-slate-500 mb-4'/>, 
title: 'TailwindCss',
},
{
icon: <DiJqueryLogo fontSize={80} className='text-slate-500 mb-4'/>, 
title: 'JQuery',
},
{
icon: <SiMui fontSize={80} className='text-slate-500 mb-4'/>, 
title:'MaterialUi', 
},
{
icon: <SiAuth0 fontSize={80} className='text-slate-500 mb-4'/>, 
title: 'Auth0',
},
{
icon: <SiSolidity fontSize={80} className='text-slate-500 mb-4'/>, 
title: 'Solidity',
}
]


export const skillsData2 = [
{
 icon: <DiNodejs fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'NodeJs',    
},
    
{
 icon: <DiMongodb fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'MongoDb',    
},
    
{
 icon: <DiNpm fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'Npm',    
},
    
{
 icon: <SiExpress fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'ExpressJs',    
},
    
{
 icon: <SiRedux fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'ReduxToolkit',    
},
    
{
 icon: <DiDatabase fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'Mongoose',    
},
    
{
 icon: <DiGithubBadge fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'Github',    
},
    
{
 icon: <DiGit fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'Git',    
},
    
{
 icon: <DiFirebase fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'Firebase',    
},
    
{
 icon: <SiPassport fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'PassportJs',    
},
    
{
 icon: <SiWeb3Dotjs fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'Web3.Js',    
},
    
{
 icon: <DiMailchimp fontSize={80} className='text-slate-500 mb-4'/>,
 title: 'Mailchimp',    
}
    
]

export const socialData = [
{
    url: "https://github.com/Femtech-web",
    icon: <BsGithub fontSize={27} className='text-gray-200 cursor-pointer'/>, 
},
{
    url: "https://web.facebook.com/profile.php?id=100007274899219",
    icon: <BsFacebook fontSize={27} className='text-gray-200 cursor-pointer'/>,
},

{
    url: "https://www.instagram.com/bossfemzy",
    icon: <BsInstagram fontSize={27} className='text-gray-200 cursor-pointer'/>, 
},
{
    url: "https://twitter.com/Fem_webDev",
    icon: <BsTwitter fontSize={27} className='text-gray-200 cursor-pointer'/>, 
},

{
    url: "https://wa.me/08149118596",
    icon: <BsWhatsapp fontSize={27} className='text-gray-200 cursor-pointer'/>, 
},

]

export const aboutMe = {
    text: "My Name is Akolade Oluwafemi Adeyemi. I am a Fullstack Developer.My Journey into Web Development started in January 2022 and since then I have never been the same.I have been through many improvement phases and since this is a Passion, I have been able to come out out of them all. I have undertaken many projects and have been able to successfully complete them all. I am a Determined professional with planning and implementing high quality websites and web apps.Skilled in frontend and backend web technologies. Proven abilities to quickly understand requirements, create innovative solutions and complete projects within provided deadlines."
};

export const values = [
{
    icon: <MdHighQuality fontSize={40} className='cursor-pointer  '/>,
    title: 'Quality',
    subtitle: 'I am are Dedicated to giving you quality High service worthy of Accolade',
},
{
    icon: <GiDart fontSize={40} className='cursor-pointer  '/>,
    title: 'Accuracy',
    subtitle: 'I take Priority in delivering services at the appropiate and given time for continous service',
},
{
    icon: <BsSquare fontSize={40} className='cursor-pointer  '/>,
    title: 'Transparency',
    subtitle: 'You can trust me when it comes to being sincere and transparent in giving out service',
}
];

export const personalExp = [
'Improved in problem definition, planning and providing solutions',
'Improved in time management and system maintenance',
'Developed several successful projects, personal and collaborative.'
];

export const companyExp = [
"Demonstrated ability to manage multiple tasks while remaining adaptable and flexible",
"Experienced with social media and communication platforms",
"Defined problems, collected data, established facts and validated conclusions",
"Detected and reported larger technical issues",
"Skilled in using various web technologies such as React,Redux, Mongo-DB, express, Node-JS, Bootstrap etc."
];

export const softSkill = [
'Good communication skills',
'Quick learning and Adapting skills',
'Problem solving skills',
'Good collaborative skills'
]

export const stats = [
    {
        title: '2years',
        subtitle: 'Experience'
    },
    {
        title: '15+',
        subtitle: 'Projects'
    },
    {
        title: 'Good',
        subtitle: 'Reviews'
    }
]