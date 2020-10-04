import React from 'react'
import produce from  './imgs/produce.png';
import './home.css'

class NavBar extends React.Component{
    state = {
        clicked:false
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <>
                <div className="nav">
    
                <div className="logo"><img src={produce} alt= "logo"/></div>
    
                    <div onClick = {this.handleClick} className="menu-icon">
                        <i className =  {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul class="text-sm" className = {this.state.clicked ? 'nav-mobile' : 'nav-big'}>
                        <li className="link">About</li>
                        <li className="link">Blog</li>
                        <li className="link">Events</li>
                        <li className="link">International</li>
                        <li className="link">Contact</li>
                        <li><button className="btn1">LOG IN</button>
                        <button className="btn2">JOIN US</button></li>
                    </ul>
                </div>
            </>
        )
    }

    
}
export default NavBar