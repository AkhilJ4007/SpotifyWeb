import React from 'react'
import "./SideBar.css"
import SidebarOption from "./SidebarOption"
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

function SideBar() {
    return (
        <div className = "sideBar">
            <img className = "sideIcon"src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"/>
            <SidebarOption option = "Home" Icon ={HomeIcon}/>
            <SidebarOption option = "Search" Icon = {SearchIcon}/>
            <SidebarOption option = "Library" Icon = {LibraryMusicIcon}/>
            <strong> Playlists</strong>
            <hr/>
            <SidebarOption option = "RAPP"/>
            <SidebarOption option = "RsdasdAPP"/>
            <SidebarOption option = "RasdaåAPP"/>
        </div>
    )
}

export default SideBar
