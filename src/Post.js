import React from 'react'
import './Post.css';
import {Avatar} from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Post({profilePic,image,timestamp,message,username}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar 
                src={profilePic && profilePic}
                className="post_avatar"
                />

                <div className="post_topInfo">
                <h3>{username && username}</h3>
                {/* new Date(timestamp?.toDate()).toUTCString() */}
                <p>{timestamp && new Date(timestamp?.toDate()).toUTCString() }...</p>
                </div>
            </div>

            

            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image && image} alt="" />
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>

                <div className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>

                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>


                <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>

            </div>
        </div>
    )
}

export default Post
