import React from 'react'
import "./SidebarOption.css"

function SidebarOption({option, Icon}) {
    return (
        <div className = "sidebarOption">
            {Icon ? <Icon/> : null }
            {Icon && option ? <h4 className = "titleName">{option}</h4> : <p>{option}</p>}
        </div>
    )
}

export default SidebarOption
