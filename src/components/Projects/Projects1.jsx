import React from 'react';
import ProjectCard from './ProjectCard';


const Projects1 = () => {
    return (
        <div>
            <section className="container pt-20 mt-4 lg:w-[95%] w-full h-full lg:mx-auto text-center lg:text-start">
                <div className="flex flex-wrap relative z-[1] mb-8">
                    {
                        ProjectCard.map((item) => {
                            return (
                                <div key={item.id} className="lg:w-1/3 md:w-1/2 p-4 w-full image_project_style mb-10">

                                    <a href={item.url} className="block relative h-60 rounded overflow-hidden">
                                        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.imgsrc} />
                                    </a>
                                    <div className="mt-4">
                                        <h2 className="text-white title-font text-lg font-medium">{item.title}</h2>
                                    </div>

                                </div>
                            )
                        })

                    }
                </div>
            </section>
        </div>
    )
}

export default Projects1
