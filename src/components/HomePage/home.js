import React from 'react'
import NavBar from './NavBar.js'
import Hero from './hero.js'
import Partners from './partners.js'
import VidSec from './vidSec.js'
import Register from './register.js'
import Blog from './blog.js'
import Event from './event.js'
import Member from './member.js'
import Footer from './footer.js'
import CopyRight from './copyRight.js'
import './home.css'

function Home(){

    return(
        <div>
            <NavBar />
            <Hero />
            <Partners />
            <VidSec />
            <Register />
            <Blog />
            <Event />
            <Member />
            <Footer />
            <CopyRight />
        </div>
    )
}
export default Home