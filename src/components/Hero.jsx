import React, { useEffect, useState } from 'react';
import headerImg from '../assets/header-img.svg';
import SocialsLarge from './SocialsLarge';

const Hero = () => {

    const toRotate = ["Web Developer.", "Web Designer.", "Ui/Ux Designer.", "Astronaut."];
    const period = 2000;

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {

        let ticker = setInterval(() => {
            tick()
        }, delta);

        return () => { clearInterval(ticker) };

    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setDelta(500);
            setLoopNum(loopNum + 1);
        }

    };

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex lg:px-5 lg:pt-24 pt-32 md:flex-row flex-col items-center ">

                    <div className="lg:flex-grow md:w-1/2 lg:ml-12 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h4><span className='color1_gradient tracking-[.26rem] lg:text-base text-sm'> Welcome to my Portfolio! </span></h4>
                        <h1 className="title-font lg:text-6xl tracking-wider text-4xl mb-4 mt-2 lg:mt-0 font-medium text-white " style={{ lineHeight: '1.2' }}>Hi, I am <span className='color_gradient'> Tayyab! </span>
                            <p>{text}</p>
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, tenetur vel ea molestiae consequuntur ipsa dolores, possimus, doloremque inventore error suscipit. Omnis dicta sed enim, ratione dolor atque aut natus.</p>
                        <div className="flex justify-center relative">
                            <a href='/' className="background_gradient">Resume</a>
                        </div>
                    </div>

                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full py-10">
                        <img className="object-cover object-center rounded animate" alt="hero" src={headerImg} />
                    </div>

                    <div className='hidden lg:flex justify-end items-center '>
                        <SocialsLarge />
                    </div>

                </div>


            </section>

        </>
    )
}

export default Hero
