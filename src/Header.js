import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import {Avatar} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useStateValue } from './StateProvider';


function Header() {
    const [{user},dispatch] = useStateValue()
    return (
        <div className="header">
        <div className="header_left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" />
            {/* input */}
            <div className="header_input">
            <SearchIcon />
            <input type="text" placeholder="search" />
            </div>

        </div>
        {/* middle */}
        <div className="header_middle">

        <div className="header_option header_option_active">
            <HomeIcon fontSize="large"/>
        </div>

        <div className="header_option">
            <FlagIcon fontSize="large"/> 
        </div>

        <div className="header_option">
            <SubscriptionsOutlinedIcon fontSize="large"/>
        </div> 

        <div className="header_option">
            <StorefrontOutlinedIcon fontSize="large"/>
        </div> 

        <div className="header_option">
            <SupervisedUserCircleIcon fontSize="large"/>
        </div> 

            
        </div>
        {/* right */}
        <div className="header_right">

        <div className="header_info">
            <Avatar src={user && user.photoURL}/>
            <h4>{user && user.displayName}</h4>
        </div>
         
        <IconButton>
        <AddIcon />
        </IconButton>

        <IconButton>
        <ForumIcon />
        </IconButton>

        <IconButton>
        <NotificationsActiveIcon />
        </IconButton>

        <IconButton>
        <ExpandMoreIcon />
        </IconButton>

        </div>

        </div>
    )
}

export default Header
