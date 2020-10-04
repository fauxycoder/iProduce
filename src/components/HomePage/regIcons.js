import React from 'react'
import './home.css'

function RegIcons(props){

    return(
        <>
        <div class="ml-6 mb-4 flex items-center mx-96 px-92">
            <div class="w-16 mr-6">
                <img src = {props.src} />
            </div>
            <div class="">
                <h3 class="font-extrabold mb-3">{props.title}</h3>
                <p class="text-xs text-gray-600 w-48">{props.text}</p>
            </div>
        </div>
        </>
    )
}
export default RegIcons