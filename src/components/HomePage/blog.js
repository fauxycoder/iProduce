import React from 'react';
import maize from './imgs/maize.png'
import tree from './imgs/tree.png'
import man from './imgs/man.png'

function Blog(){
    
    return(
        <>
            <div class="w-full flex justify-between items-center md:px-64 px-10 mb-4">
                <h2 class="font-bold text-lg pb-2 md:text-3xl">Check Our Blog</h2>
                <button class="py-2 px-6 rounded-full border font-bold hover:bg-gray-600 text-sm">show more</button>
            </div>
            <div class="md:flex justify-center items-center md:px-56 px-8">
                <div class="m-6 mt-10 md:mt-4">
                    <img src = {maize} alt="maize" class="rounded-lg mb-6 shadow-2xl"/>
                    <h3 class="font-bold md:text-2xl text-lg mb-4">How Ag-Tech Ripened into a Growing Market</h3>
                    <p class="text-gray-600 text-sm mb-4">Some people may be still confusing to arrange budgeting for their bu...</p>
                    <button class="border-0 outline-none text-bold" style={{color:'#76e31b'}}>Read more</button>
                </div>
                <div class="m-6 mt-10 md:mt-4">
                    <img src = {tree} alt="tree" class="rounded-lg mb-6 shadow-2xl"/>
                    <h3 class="font-bold md:text-2xl text-lg mb-4">The Future is Green and Growing Fast</h3>
                    <p class="text-gray-600 text-sm mb-4">Some people may be still confusing to arrange budgeting for their bu...</p>
                    <button class="border-0 outline-none text-bold" style={{color:'#76e31b'}}>Read more</button>
                </div>
                <div class="m-6 mt-10 md:mt-6">
                    <img src = {man} alt="man" class="rounded-lg mb-6 shadow-2xl"/>
                    <h3 class="font-bold md:text-2xl text-lg mb-4">We're ignoring the Only Industry We Can't Do</h3>
                    <p class="text-gray-600 text-sm mb-4">Some people may be still confusing to arrange budgeting for their bu...</p>
                    <button class="border-0 outline-none text-bold" style={{color:'#76e31b'}}>Read more</button>
                </div>
            </div>
        </>
    )
}
export default Blog