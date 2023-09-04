import React, { useState } from 'react'
import SocialsSmall from './SocialsSmall';



const NavBar = (props) => {

    let { activeLink, onUpdateActiveLink } = props;

    const [activeBtn, setActiveBtn] = useState(false);

    const toggleBtn = () => {

        if (activeBtn) {
            setActiveBtn(false)
        }
        else {
            setActiveBtn(true)

        }

    };



    return (
        <>

            <nav className="bg-transparent fixed w-full z-20 top-0 left-0 shadow-lg">

                <div className="w-[95%] flex flex-wrap items-center justify-between mx-auto p-4">

                    <a href="/" className={'lg:ml-12 logo text-4xl text-[#f6f8fa]'}>Tayyab</a>

                    <button onClick={toggleBtn} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden background text-white" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className={activeBtn ? 'items-center justify-between block w-full bg-white rounded-md mt-7 transition_toggle' : ' items-center justify-between hidden lg:ml-auto lg:mr-9 w-full lg:flex lg:w-auto lg:order-1'} id="navbar-sticky">

                        <ul className="flex flex-col justify-center items-center lg:items-stretch p-4 lg:p-0 mt-4 font-medium rounded-lg bg-transparent lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700 lg:mr-12">

                            <li className='relative navlinks mb-1'>
                                <a onClick={() => onUpdateActiveLink('/')} href="#" className={activeLink === '/' ? "text-[#7748B9]" : "block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-[#983EA4] lg:p-0 "}> Home </a>
                            </li>
                            <li className='relative navlinks mb-1'>
                                <a onClick={() => onUpdateActiveLink('about')} href="#about" className={activeLink === 'about' ? "text-[#7748B9]" : "block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-[#983EA4] lg:p-0 "}> About </a>
                            </li>
                            <li className='relative navlinks mb-1'>
                                <a onClick={() => onUpdateActiveLink('projects')} href="#projects" className={activeLink === 'projects' ? "text-[#7748B9]" : "block pl-3 pr-4 text-gray-500 rounded hover:text-[#983EA4] lg:p-0 "}> Projects </a>
                            </li>
                            <li className='relative navlinks mb-1'>
                                <a onClick={() => onUpdateActiveLink('skills')} href="#skills" className={activeLink === 'skills' ? "text-[#7748B9]" : "block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-[#983EA4] lg:p-0 "}> Skills </a>
                            </li>
                            <li className='relative navlinks mb-1'>
                                <a onClick={() => onUpdateActiveLink('contact')} href="#contact" className={activeLink === 'contact' ? "text-[#7748B9]" : "block py-2 pl-3 pr-4 text-gray-500 rounded hover:text-[#983EA4] lg:p-0 "}> Contact </a>
                            </li>

                            <li className='lg:hidden flex justify-center items-center'>
                                <SocialsSmall />
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>


        </>
    )
}

export default NavBar
