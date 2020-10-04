import React from 'react'
import produce from './imgs/produce.png'

function Footer(){

    return(
        <>
            <div class="w-auto md:mx-56 px-10 pt-10 mt-32 mb-10 flex justify-between center border-t-2 flex-wrap">
            <div class="md:w-32 w-48 md:mr-38 mr-0 flex justify-center items-center mb-6">
                <img src={produce} alt="footerLogo" class="w-full"/>
            </div>
            <div class="flex justify-around items-center flex-wrap w-full">
                <ul class="md:text-xs text-base text-gray-600 text-center w-full md:w-auto mb-6 md:mb-0 pb-5 md:pb-0
                 border-b-2
                md:border-b-0">
                         <li>About</li>
                        <li>Blog</li>
                        <li>Events</li>
                        <li>International</li>
                        <li>Contact</li>
                </ul>
                <ul class="md:text-xs text-base text-gray-600 text-center w-full md:w-auto mb-6 md:mb-0 pb-5 md:pb-0
                border-b-2
                md:border-b-0">
                         <li>Terms of use </li>
                        <li>Cookie policy</li>
                        <li>Privacy policy</li>
                        <li>Weather</li>
                </ul>
                <div class="md:text-xs text-base text-gray-600 text-center w-full md:w-auto mb-6 md:mb-0 pb-5 md:pb-0">
                    <b>Subscribe to our newsletter</b>
                    <p class="mt-1">Sign up to our monthly newsletter to stay<br /> upto date with iProducde</p>
                    <i className="fa fa-envelope"></i><input class="py-2 px-10 bg-gray-100 mt-3" type="email" name = "email" placeholder="Enter your email" />
                </div>
            </div>
                    
            </div>

        </>
    )
}
export default Footer