import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow'

import ChatIcon from '@material-ui/icons/Chat';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import PeopleIcon from '@material-ui/icons/People';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import StorefrontIcon from '@material-ui/icons/Storefront';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user},dispatch] = useStateValue()

    return (
        <div className="sidebar">
            <SidebarRow  
            title={user && user.displayName} 
            src={user && user.photoURL}
            />

            <SidebarRow  
            title={"Convid-19"} 
            Icon = {LocalHospitalIcon}
            />

            <SidebarRow  
            title={"Pages"} 
            Icon = {EmojiEmotionsIcon}
            />

            <SidebarRow  
            title={"Friends"} 
            Icon = {PeopleIcon}
            />

            <SidebarRow  
            title={"Messager"} 
            Icon = {ChatIcon}
            />

            <SidebarRow  
            title={"Videos"} 
            Icon = {ExpandMoreIcon}
            />
        </div>
    )
}

export default Sidebar
