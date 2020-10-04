import React from 'react';
import hand from './imgs/hand.png'
import crop from './imgs/crop.png'
import base from './imgs/base.png'

function Event(){
    
    return(
        <>
            <div class="w-full flex justify-between items-center md:px-56 px-10 mb-4 mt-12">
                <h2 class="font-bold text-lg pb-2 md:text-3xl">Upcoming Events</h2>
                <button class="py-2 px-6 rounded-full border font-bold hover:bg-gray-600 text-sm">show more</button>
            </div>
            <div class="md:flex justify-center items-center md:px-32 px-8">
                <div class="m-6 mt-10 md:mt-4">
                    <img src = {hand} alt="hand" class="rounded-lg mb-6 shadow-2xl w-48"/>
                    <button class="border-0 outline-none text-bold" style={{color:'#76e31b'}}>Webinar</button>
                    <h3 class="font-bold md:text-2xl text-lg mb-4">Prepare Your Agro- <br />Business Plan</h3>
                    <p class="text-gray-600 text-sm mb-4">25 Jun 2020, 6:00pm</p>
                </div>
                <div class="m-6 mt-10 md:mt-4">
                    <img src = {crop} alt="crop" class="rounded-lg mb-6 shadow-2xl w-48"/>
                    <button class="border-0 outline-none text-bold" style={{color:'#76e31b'}}>Webinar</button>
                    <h3 class="font-bold md:text-2xl text-lg mb-4">Organic Farming</h3>
                    <p class="text-gray-600 text-sm mb-4">25 Jun 2020, 6:00pm</p>
            
                </div>
                <div class="m-6 mt-10 md:mt-6">
                    <img src = {base} alt="base" class="rounded-lg mb-6 shadow-2xl w-48 "/>
                    <button class="border-0 outline-none text-bold" style={{color:'#76e31b'}}>Webinar</button>
                    <h3 class="font-bold md:text-2xl text-lg mb-4">Agribusiness Financing</h3>
                    <p class="text-gray-600 text-sm mb-4">25 Jun 2020, 6:00pm</p>
        
                </div>
            </div>
        </>
    )
}
export default Event