import React from 'react'
import './home.css'
import video from './imgs/video.png'

function VidSec(){

    return(
        <>
        <div class="w-60 md:px-32 px-10 flex md:justify-around justify-center
         items-center md:items-center md:flex-row flex-col">
            <div class="w-full md:w-1/2 md:ml-16 mt-20 md:mt-0">
                <img src ={video} alt="group" class="w-50 md:w-full" />
            </div>
            <div class="w-full md:pr-10 pr-0 md:w-1/2 md:ml-32 ml-0 mt-10 md:mt-0">
                <h2 class="font-bold text-xl pb-2 md:text-2xl">Integrating African Agriprenuers to the World
                 Agro-ecosysytem</h2>
                <p class="text-sm text-gray-600">iProduce Africa Agri-business hub is an initiative of Inara Foundation., a
                non-profit organization established to address development challenges in Nigeria
                with a focus on the following thematic areas; youth empowerment; economic development; women
                empoerment; and development</p>
            </div>
        </div>
        </>
    )
}
export default VidSec