import React, { useState } from 'react';

import Projects1 from './Projects1';
import Projects2 from './Projects2';
import Projects3 from './Projects3';
import Video from '../Video';

const Projects = () => {

    const [activeLink, setActiveLink] = useState('projects1');



    const updateActiveLink = (value) => {
        setActiveLink(value)
    };

    return (
        <>
            <section id='projects' className=''>

                <div className='text-white lg:w-[85%] lg:mx-auto w-full py-20 text-center lg:text-start'>
                    <h1 className='text-4xl bar pb-1 '>Projects</h1>
                    <div className='border-b-4 lg:w-[12.3%] w-[45%] mb-7 rounded-md mx-auto lg:mx-0' style={{ borderColor: "rgb(119, 72, 185)" }}></div>

                    <p>This is my Projects List & I'll keep adding projects to it.
                    </p>



                    <div className='lg:flex lg:justify-center lg:items-center mt-12 mb-4 cursor-pointer sm:block'>
                        <div onClick={() => updateActiveLink('projects1')} className={activeLink === 'projects1' ? 'rounded-full my-0.5 border-2 lg:rounded-l-full lg:rounded-r-none px-28 py-4 background' : 'rounded-full my-0.5 border-2 lg:rounded-l-full lg:rounded-r-none px-28 py-4'}>React Projects</div>
                        <div onClick={() => updateActiveLink('projects2')} className={activeLink === 'projects2' ? 'rounded-full my-0.5 lg:rounded-none border-2 px-28 py-4 background' : 'rounded-full lg:rounded-none my-0.5 border-2 px-28 py-4'}>JavaScript Projects</div>
                        <div onClick={() => updateActiveLink('projects3')} className={activeLink === 'projects3' ? 'rounded-full my-0.5 border-2 lg:rounded-r-full lg:rounded-l-none px-28 py-4 background' : 'rounded-full my-0.5 border-2 lg:rounded-r-full lg:rounded-l-none px-28 py-4'}>Projects 3</div>
                    </div>

                    {activeLink === 'projects1' && <Projects1 />}
                    {activeLink === 'projects2' && <Projects2 />}
                    {activeLink === 'projects3' && <Projects3 />}

                    <div className='lg:w-3/4 w-[95%] mx-auto'>
                        <Video />
                    </div>

                </div>


            </section>
        </>
    )
}

export default Projects
