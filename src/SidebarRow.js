import React from 'react'
import {Avatar} from '@material-ui/core';
import './SidebarRow.css'

function SidebarRow({src,Icon,title}) {
    return (
        <div className="sidebarRow">
            {Icon && <Icon />}
            {src && <Avatar src={src}/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
