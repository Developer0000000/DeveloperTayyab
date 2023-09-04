import React from 'react';
import github from '../assets/github.png';
import gmail from '../assets/gmail.png';
import replit from '../assets/replit.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';

const SocialsLarge = () => {
    return (
        <>
            <div className='flex flex-col top[15%] left-0 fixed'>
                <ul>
                    <li className='-ml-[100px] hover:-ml-[10px] w-40 h-14 pl-4 pr-2 pt-3 rounded-tr-lg duration-300 bg-gray-500 text-white'>
                        <a rel='noreferrer' href="https://twitter.com/devloper_000" className='flex items-center justify-between'>Twitter
                            <img className='w-[25%] invert mr-2' src={twitter} alt="" />
                        </a>
                    </li >

                    <li className='flex justify-start items-center -ml-[100px] hover:-ml-[10px]  w-40 h-14 pl-4 pr-2 duration-300 bg-gray-500 text-white'>
                        <a rel='noreferrer' href="https://www.linkedin.com/in/tayyab-afzal-4787b028a/" className='flex items-center justify-between'>Linkedin
                            <img className='w-[25%] invert mr-2' src={linkedin} alt="" />
                        </a>
                    </li>

                    <li className='flex justify-start items-center -ml-[100px] hover:-ml-[10px]  w-40 h-14 pl-4 pr-2 duration-300 bg-gray-500 text-white'>
                        <a rel='noreferrer' href="https://github.com/Developer0000000" className='flex items-center justify-between'>Github
                            <img className='w-[25%] invert mr-2' src={github} alt="" />
                        </a>
                    </li>

                    <li className='flex justify-start items-center -ml-[100px] hover:-ml-[10px]  w-40 h-14 pl-4 pr-2 duration-300 bg-gray-500 text-white'>
                        <a rel='noreferrer' href="https://replit.com/@TayyabAfzal1" className='flex items-center justify-between'>Replit
                            <img className='w-[25%] invert mr-2' src={replit} alt="" />
                        </a>
                    </li>

                    <li className='flex justify-start items-center -ml-[100px] hover:-ml-[10px]  w-40 h-14 pl-4 pr-2 pb- rounded-br-lg duration-300 bg-gray-500 text-white'>
                        <a rel='noreferrer' href="mailto:tayyabafzal174@gmail.com" className='flex items-center justify-between'>Gmail
                            <img className='w-[25%] invert mr-2' src={gmail} alt="" />
                        </a>
                    </li>

                </ul >
            </div >
        </>
    )
}

export default SocialsLarge
