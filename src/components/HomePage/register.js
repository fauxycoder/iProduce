import React from 'react'
import RegIcons from './regIcons.js'
import icon from './imgs/icon.png'
import  book from './imgs/book.png'
import calendar from './imgs/calendar.png'
import shake from './imgs/shake.png'
import './home.css'

function Register(){

    return(
        <>
        <div class=" mx-full max-w-60 md:px-32 flex md:justify-around justify-center
         items-center md:items-center flex-col mt-32 mb-5">
            <div class="w-full mb-16">
                <h2 class="font-bold text-xl pb-2 md:text-2xl text-center"> <span class="text-xs text-blue-400">
                WHY REGISTER</span> <br />We equip you with all that you<br />
                need to grow your agro-business</h2>
                </div>
                <div class="mx-96 flex justify-around items-center flex-wrap">
            <RegIcons src={icon} title="Business Advisory Services" text="Access our business advisory and coaching 
            services for agriprenuers" alt="icon"/>
             <RegIcons src={book} title="Essential Guides" text="Learn about prospective export markets" alt="book"/>
             <RegIcons src={calendar} title="Easy feedback sharing" text="Attend our events tailored to build the 
             capacity of our agriprenuers" alt="calender"/>
             <RegIcons src={shake} title="Business Deal room" text="Get matched and connect with potential agribusiness
             partners around the globe" alt="shake"/>
                </div>
        </div>
        </>
    )
}
export default Register
