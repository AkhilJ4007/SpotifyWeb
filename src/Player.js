import React from 'react'
import SideBar from "./SideBar"
import MainBody from "./MainBody"
import Footer from "./Footer"
import "./Player.css"


function Player() {
    return (
        <div>
            <div className = "container1">
                <SideBar/>
                <MainBody/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Player
