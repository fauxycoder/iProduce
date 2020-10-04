import React from 'react'
import './home.css'
import group from './imgs/group.png'
import bitmap from './imgs/bitmap.png'
import icreate from './imgs/icreate.png'
import awib from './imgs/awib.png'

function Partners(){

    return(
        <>
            <div class="mt-24 px-32 md:pb-24 pb-0">
            <div class="w-full text-center text-gray-700 md:mb-0 mb-10">Our Partners & Supporters</div>
            <div class="w-full mt-6 flex md:justify-around justify-center items-center md:items-center md:flex-row flex-col">
                <img src={group} class="w-32 md:mb-0 mb-12" alt="group"/>
                <img src={bitmap} class="w-32 md:mb-0 mb-12" alt="bitmap"/>
                <img src={icreate} class="w-32 md:mb-0 mb-12" alt="icreate"/>
                <img src={awib} class="w-32 md:mb-0 mb-12" alt="awib"/>
            </div>
            </div>
        </>
    )
}
export default Partners