import React from 'react'

function CopyRight(){

    return(
        <>
        <div class="flex justify-between items-center py-2 px-6 bg-gray-800 text-white text-xs">
            <div class="text-base w-32 flex justify-around items-center">
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div>
                <p>&copy; 2020 iProduce All rights reserved</p>
            </div>
        </div>
        </>
    )
}
export default CopyRight