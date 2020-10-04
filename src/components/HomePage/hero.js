import React from 'react'
import './home.css'
import image from './imgs/image.png'

function Hero(){

    return(
        <>
        <section className="hero-sec" class="w-full py-10 md:px-32 px-10
        md:flex md:justify-between text-center items-center wrap">
            <div class="w-full md:pr-10 pr-0 md:w-1/2">
                <h1 class="font-bold text-2xl pb-2 md:text-4xl">Unlocking Agribusiness Opportunities</h1>
                <p class="text-sm text-gray-600">We connect you with helpful resources, services and opportunities to start 
                or grow your agribusiness.</p>
                <button class="py-2 px-16 text-xs text-white mt-6 rounded hover:text-black transition-.5s
                " style={{backgroundColor:'#76e31b'}}>JOIN US</button>
            </div>
            <div class="w-full md:w-1/2 md:ml-16 mt-20 md:mt-0">
                <img src ={image} alt="group" class="w-60 md:w-80" />
            </div>
        </section>
        </>
    )
}
export default Hero