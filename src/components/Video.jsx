import React from 'react';

import Plyr from "plyr-react";
import "/node_modules/plyr-react/plyr.css";

import ecommerce from '../assets/ecommerce.mp4';


const Video = () => {

    const videoSrc = {
        type: "video",
        sources: [
            {
                src: ecommerce,
            }
        ]
    };

    return (
        <div>
            <h1 className='lg:text-3xl text-xl lg:pb-10 pb-4 text-center'>Apneck Ecommerce</h1>
            <div className='player'>
                <Plyr source={videoSrc} />
            </div>

        </div>
    )
}

export default Video
