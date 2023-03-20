import React from 'react';
import { BsGithub, BsCursorFill } from 'react-icons/bs'

const Projects = () => {
  return (
    <div className='flex flex-col px-[3%] py-[2%] bg-[#0F1724]'>
        <div className='flex flex-col max-w-[300px] mb-[5rem] items-center justify-center'>
            <h1 className="futura font-bold tracking-widest text-4xl inline-block text-gray-200
            pb-2 ">Recent Projects</h1>
            <div className="h-0.5 w-[170px] -translate-x-4  bg-indigo-600 mt-2"></div>
        </div>

        <div className="flex flex-col">
            <div className='flex flex-col md:flex-row md:px-[7%] px-4 md:pb-[8%] pb-[25%]'>
                <div className='flex flex-col justify-center items-start md:w-[50%] w-full'>
                    <h1 className='text-gray-200 mb-4 font-semibold  text-[1.6rem] gt '>Shopem E-commerce Site</h1>
                    <p className="text-gray-200 gt text-lg">Shopem E-commerce Website is a Responsive web store. They 
                    deal in selling of Male, Female and Unisex Fashion Outfits. customers can Register and Login, View 
                    Preferred Choice of Outfit from Different Brands, Purchase Outfit and It will be delivered to them in a short while.
                    It has a Register and Login Page, HomePage, ProductList page, Individual Product Page, Cart Page, Customer 
                    Details Page, Payment Page, Success and Error Page.</p>
                    <h3 className="text-gray-200 gt text-xl font-semibold my-2">Web Technologies Used</h3>
                    <ul className='inline-block list-none text-gray-200 gt'>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>React</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Styled-Components</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Material-Ui</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Redux-Toolkit</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>ExpressJs</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Mongodb</li>
                    </ul>
                    <div className='flex my-4 '>
                        <a href="https://shopem-7029.onrender.com" target="_blank" rel="noopener noreferrer">
                            <button className='flex justify-center transition-all hover:bg-indigo-400 items-center gt text-gray-200 rounded-full
                                w-[150px] p-3 border-2 border-indigo-400'>
                                Demo
                                <BsCursorFill fontSize={20} className='ml-3 text-gray-200'/>
                            </button>
                        </a>
                        <a href="https://github.com/Femtech-web/SHOPEM" target="_blank" rel="noopener noreferrer">
                            <button className='flex justify-center transition-all hover:bg-indigo-400 items-center ml-3 gt text-gray-200 rounded-full
                                w-[150px] p-3 border-2 border-indigo-400'>
                                Github
                                <BsGithub fontSize={20} className='ml-3 text-gray-200'/>
                            </button>
                        </a>
                    </div>
                </div>
                <div className='p-[3%] md:w-[50%] w-full '>
                    <div className='bg-[#282628] w-full h-full rounded-xl 
                        md:-rotate-6 rotate-0 md:ml-7 ml-2 md:mt-0 mt-[12%]'>
                        <img src="/images/shopem.png" alt="Shopem" 
                            className='md:rotate-12 rotate-0 object-scale-contain rounded-xl w-full h-full' />
                    </div>
                </div>
            </div>

            <div className=' flex flex-col md:flex-row md:px-[7%] px-4 md:pb-[8%] pb-[25%]'>
                <div className='p-[3%] md:w-[50%] w-full md:block hidden'>
                        <div className='bg-[#282628] w-full h-full rounded-xl rotate-6 '>
                            <img src="/images/crypt.png" alt="Shopem" className='-rotate-12 object-scale-contain rounded-xl w-full h-full' />
                        </div>
                </div>
                <div className='flex flex-col justify-center items-start md:w-[50%] w-full md:ml-7 ml-2'>
                    <h1 className='text-gray-200 mb-4 font-semibold text-[1.6rem] gt'>Crypt Decentralized App</h1>
                    <p className="text-gray-200 gt text-lg">Crypt Web App is a Decentralized Application which runs on the Blockchain.
                    It was Built for the purpose of Security, Decentralization and trust. It enables Users after Connecting there wallet through Metamask
                    to send Ethers/Tokens to any other Crypto Address anywhere around the world. 
                    Metamask enables Users to Sign in there Ethereum Wallet Address to connect to the blockchain for transactions
                    Users can Connect there Wallet, Send Ethereum Ethers and See list of Recent Transactions.
                    There is a Homepage, and Guide page to enable android users install metamask and use the web App on Android Devices.</p>
                    <h3 className="text-gray-200 gt text-xl font-semibold my-2">Web Technologies Used</h3>
                    <ul className='inline-block list-none text-gray-200 gt'>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>React</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>TailwindCss</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>React-Icons</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Solidity</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Giphy</li>
                    </ul>
                    <div className='flex my-4 '>
                        <a href="https://crypt-blockchain.onrender.com" target="_blank" rel="noopener noreferrer">
                            <button className='flex transition-all justify-center hover:bg-indigo-400 items-center gt text-gray-200 rounded-full
                                w-[150px] p-3 border-2 border-indigo-400'>
                                Demo
                                <BsCursorFill fontSize={20} className='ml-3 text-gray-200'/>
                            </button>
                        </a>
                        
                        <a href="https://github.com/Femtech-web/blockchain" target="_blank" rel="noopener noreferrer">
                            <button className='flex justify-center transition-all hover:bg-indigo-400 items-center ml-3 gt text-gray-200 rounded-full
                                w-[150px] p-3 border-2 border-indigo-400'>
                                Github
                                <BsGithub fontSize={20} className='ml-3 text-gray-200'/>
                            </button>
                        </a>
                        
                    </div>
                    <div className='p-[3%] md:w-[50%] w-full md:hidden block md:mt-0 mt-[12%]'>
                        <div className='bg-[#282628] w-full h-full rounded-xl md:rotate-6 rotate-0'>
                            <img src="/images/crypt.png" alt="Shopem" 
                                className='md:-rotate-12 rotate-0 object-scale-contain rounded-xl w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:px-[7%] px-4 md:pb-[8%] pb-[15%]'>
                <div className='flex flex-col justify-center items-start md:w-[50%] w-full'>
                    <h1 className='text-gray-200 mb-4 font-semibold text-[1.6rem] gt'>Bible Web App</h1>
                    <p className="text-gray-200 gt text-lg">Bible Web App was not much of a beautiful site but rather it was used to
                    implement some really important backend functions such like Authentication and security.
                    It is a web App with which enables Users to Register then login before accessing the main Homepage interface
                    which list's some bible verse foe different situations of Users. Strictly only when Users have logged before they can access the
                    main page. They can also log out. It has a landing page, Register and loign page and Homepage.</p>
                    <h3 className="text-gray-200 gt text-xl font-semibold my-2">Web Technologies Used</h3>
                    <ul className='inline-block list-none text-gray-200 gt'>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>HTML</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>CSS</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Bootsrap</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Ejs</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>ExpressJs</li>
                        <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Mongodb</li>
                            <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>PassportJs</li>
                            <li className='mr-2 inline-block bg-gradient-to-r 
                            from-[#9060DA] to-[#28A2CF] bg-clip-text text-transparent font-black'>Auth02</li>
                    </ul>
                    <div className='flex my-4 '>
                        <a href="https://bible-app.onrender.com" target="_blank" rel="noopener noreferrer">
                            <button className='flex justify-center transition-all hover:bg-indigo-400 items-center gt text-gray-200 rounded-full
                                w-[150px] p-3 border-2 border-indigo-400'>
                                Demo
                                <BsCursorFill fontSize={20} className='ml-3 text-gray-200'/>
                            </button>
                        </a>
                        
                       <a href="https://github.com/Femtech-web/bible-webApp" target="_blank" rel="noopener noreferrer">
                        <button className='flex justify-center transition-all hover:bg-indigo-400 items-center ml-3 gt text-gray-200 rounded-full
                                w-[150px] p-3 border-2 border-indigo-400'>
                                Github
                                <BsGithub fontSize={20} className='ml-3 text-gray-200'/>
                            </button>
                       </a>
                    </div>
                </div>
                <div className='p-[3%] md:w-[50%] w-full'>
                    <div className='bg-[#282628] w-full h-full rounded-xl md:-rotate-6 rotate-0 
                        md:ml-7 ml-2 md:mt-0 mt-[12%]'>
                        <img src="/images/bible.png" alt="Shopem" 
                            className='md:rotate-12 rotate-0 object-scale-contain rounded-xl w-full h-full' />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects