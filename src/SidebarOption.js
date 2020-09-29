import React,{useState,useEffect} from 'react'
import "./SidebarOption.css"
import {useDataLayerValue} from './DataLayer'

function SidebarOption({option, Icon, id}) {

    const [{selectedPlaylist_ID},dispatch] = useDataLayerValue()

    const [color,setColor] = useState("grey")


    const sidebarClicked = () => {

        dispatch({
            type: "SET_PLAYLIST_ID",
            selectedPlaylist_ID : id
        })
    }

    useEffect(() => {

        if(selectedPlaylist_ID === id){
            setColor("white")
        }
        else{
            setColor("grey")
        }

    }, [selectedPlaylist_ID])

    return (
        <div className = "sidebarOption" style = {{color:color}} onClick = {sidebarClicked}>
            {Icon ? <Icon/> : null }
            {Icon && option ? <h4 className = "titleName">{option}</h4> : <p>{option}</p>}
        </div>
    )
}

export default SidebarOption
