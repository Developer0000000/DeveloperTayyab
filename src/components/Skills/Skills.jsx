import React from 'react'
import SkillCard from './SkillCard'

const Skills = () => {
    return (
        <>

            <section id='skills' className="text-white body-font">
                <div className="container px-5 pb-24 mx-auto lg:w-[85%] w-full">

                    <h1 className='text-4xl pb-1 text-center lg:text-start'>Skills</h1>
                    <div className='border-b-4 lg:w-[7.5%] w-[33%] mx-auto lg:mx-0 mb-7 rounded-md' style={{ borderColor: "rgb(119, 72, 185)" }}></div>
                    <p className='text-center lg:text-start'>These are the technologies i am familiar with</p>



                    <div className="flex flex-wrap w-full mx-auto pt-16">
                        {
                            SkillCard.map((item) =>
                                <div className="relative lg:p-4 md:w-1/3 my-2 lg:my-0 w-full cursor-pointer z-[1]" key={item.id}>

                                    <div className="flex items-center justify-center text-center w-full flex-col image_style_skill space-y-6 lg:space-y-0 mt-[4.5rem] lg:mt-0" >
                                        <img className="lg:h-48 md:h-36 w-[45%] lg:w-[40%] object-contain object-center rounded-sm lg:hover:scale-125 hover:scale-110 transition_property " src={item.imgsrc} alt="blog" />
                                        <h2 className="tracking-widest text-base title-font text-left font-medium text-white mb-1">{item.title}</h2>
                                    </div>

                                </div>
                            )
                        }

                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills;