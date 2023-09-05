import React from 'react';
import contactImg from '../assets/contact-img.svg';
import UseFormData from './Validation/UseFormData';



const Contact = () => {

    let { formSubmit, formValidation, errors } = UseFormData()


    return (
        <>

            <section id='contact' className="text-white body-font pb-20 pt-32">

                <div className='mx-auto lg:w-[85%] w-full text-center lg:text-start'>
                    <h1 className='text-4xl pb-1 '>Contact Me</h1>
                    <div className='border-b-4 lg:w-[18%] w-[63%] mx-auto lg:mx-0 mb-7 rounded-md' style={{ borderColor: "rgb(119, 72, 185)" }}></div>
                    <p>Contact me with more Queries and Information</p>
                </div>

                <div className="container flex px-5 py-24 md:flex-row flex-col items-center mx-auto w-[85%]">


                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="contactImg" src={contactImg} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:w-full w-full lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left text-left items-center">

                        <form className='w-full h-96' onSubmit={formSubmit} action='https://formspree.io/f/xwkdboob' method='POST'>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 w-full mb-7 group">
                                    <input autoComplete='off' onChange={formValidation} type="text" name="fname" id="floating_first_name" className={errors.fname ? "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" : "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"} placeholder=" " />
                                    <label htmlFor="fname" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name <span className='text-red-700'>*</span> </label>
                                    {errors.fname && <p className='text-xs pt-2'>{errors.fname}</p>}
                                </div>

                                <div className="relative z-0 w-full mb-7 group">
                                    <input autoComplete='off' onChange={formValidation} type="text" name="lname" id="floating_last_name" className={errors.lname ? "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" : "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"} placeholder=" " />
                                    <label htmlFor="lname" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name <span className='text-red-700'>*</span> </label>
                                    {errors.lname && <p className='text-xs pt-2'>{errors.lname}</p>}
                                </div>

                            </div>

                            <div className="relative z-0 w-full mb-7 group">
                                <input autoComplete='off' onChange={formValidation} type="email" name="email" id="floating_email" className={errors.email ? "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" : "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"} placeholder=" " />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address <span className='text-red-700'>*</span> </label>
                                {errors.email && <p className='text-xs pt-2'>{errors.email}</p>}
                            </div>

                            <div className="relative z-0 w-full mb-12 group">
                                <textarea onChange={formValidation} name="message" id="message" cols="10" rows="5" className={errors.message ? "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-600 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" : "block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"} placeholder=" "></textarea>
                                <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Message <span className='text-red-700'>*</span> </label>
                                {errors.message && <p className='text-xs pt-2'>{errors.message}</p>}
                            </div>

                            <div className='flex justify-center items-center lg:block'>
                                <button type="submit" className="background_gradient">Submit</button>
                            </div>

                        </form>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact
