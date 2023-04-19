import {BsDatabaseFillX} from 'react-icons/bs';
import {DiResponsive} from 'react-icons/di';
import {RiStackLine, RiComputerLine} from 'react-icons/ri'
import {AiOutlineDatabase,
AiOutlineAppstore
} from 'react-icons/ai';

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