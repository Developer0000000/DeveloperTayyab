import React from 'react'

const Footer = (props) => {

    let { activeLink, onUpdateActiveLink } = props;


    return (
        <>
            <footer className="text-white body-font w-full">
                <div className="container px-5 pb-24 pt-10 mx-auto w-full">
                    <div className="flex flex-wrap justify-center md:text-left text-center order-first w-full">
                        <div className="lg:w-[25%] md:w-1/2 w-full px-4">

                            <a href='/' className="title-font font-medium logo text-white text-4xl ">Tayyab</a>
                            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eaque.</p>
                        </div>
                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-base mb-6  uppercase">Permalinks</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li className='relative navlinks'>
                                    <a href='#' onClick={() => onUpdateActiveLink('/')} className={activeLink === '/' ? "text-[#7748B9]" : "text-white hover:text-[#983EA4] cursor-pointer"}>Home</a>
                                </li>
                                <li className='relative navlinks'>
                                    <a href='#about' onClick={() => onUpdateActiveLink('about')} className={activeLink === 'about' ? "text-[#7748B9]" : "text-white hover:text-[#983EA4] cursor-pointer"}>About</a>
                                </li>
                                <li className='relative navlinks'>
                                    <a href='#products' onClick={() => onUpdateActiveLink('products')} className={activeLink === 'products' ? "text-[#7748B9]" : "text-white hover:text-[#983EA4] cursor-pointer"}>Products</a>
                                </li>
                                <li className='relative navlinks'>
                                    <a href='#skills' onClick={() => onUpdateActiveLink('skills')} className={activeLink === 'skills' ? "text-[#7748B9]" : "text-white hover:text-[#983EA4] cursor-pointer"}>Skills</a>
                                </li>
                                <li className='relative navlinks'>
                                    <a href='#contact' onClick={() => onUpdateActiveLink('contact')} className={activeLink === 'contact' ? "text-[#7748B9]" : "text-white hover:text-[#983EA4] cursor-pointer"}>Contact</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-base mb-6  uppercase">Permalinks</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li className='relative navlinks'>
                                    <a href='/' className="text-white hover:text-[#983EA4] cursor-pointer">Privacy Policy</a>
                                </li>
                                <li className='relative navlinks'>
                                    <a href='/' className="text-white hover:text-[#983EA4] cursor-pointer">Terms and Condition</a>
                                </li>
                                <li className='relative navlinks'>
                                    <a href='/' className="text-white hover:text-[#983EA4] cursor-pointer">Refund Privacy</a>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-[30%] md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-base mb-6">SUBSCRIBE</h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap ju space-y-2 justify-center items-end md:justify-start">
                                <div className="relative z-0 w-full mb-7 group ">
                                    <input type="text" id="footer-field" name="footer-field" className="block py-2.5 px-0 w-[90%] mx-auto lg:mx-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=' ' />
                                    <label htmlFor="footer-field" className="peer-focus:font-medium w-[90%] text-left mx-auto absolute text-xs left-4 lg:left-0 text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subscribe! get important updates</label>
                                </div>
                            </div>
                            <a href='/' type="submit" className="background_gradient justify-center ">Subscribe</a>
                            <p className="text-white text-base mt-4 md:text-left text-center">Bitters chicharrones fanny pack waistcoat green juice
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t-[1px] border-white text-center lg:text-start">
                    <div className="container py-6 mx-auto justify-center flex items-center sm:flex-row flex-col lg:w-[85%]">
                        <p className="text-base transition_property text-white sm:ml-6 sm:mt-0 mt-4">
                            Copyright © {new Date().getFullYear()} All Right Reserved! &
                            <i class="fa-solid fa-heart-pulse hover: text-[#7748B9] hover:text-[#983EA4] cursor-pointer ml-1 "></i> by
                            <a href='https://twitter.com/devloper_000' className="title-font font-medium logo text-white ml-2 text-xl ">Tayyab</a>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
