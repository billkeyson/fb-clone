import React ,{useState}from 'react'
import './MessageSender.css';
import {Avatar} from '@material-ui/core';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import firebase from 'firebase';
import db from './firebase'
import { useStateValue } from './StateProvider';

function MessageSender() {
    const [{user},dispatch] = useStateValue()

    const [input,setInput] =useState("")
    const [imageUrl,setImageUrl] =useState("")


    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("submitting")
        if(input){
            db.collection("post").add({
                message:input,
                profilePic:user.photoURL,
                username:user.displayName,
                image:imageUrl,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
        }

    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input  
                    value={input}
                    onChange={(e)=>{setInput(e.target.value)}}
                    className="messageSendwe_input"
                    placeholder={`What's on your mind ${user && user.displayName}`} />
                    <input
                    name={imageUrl}
                    onChange={(e)=>{setImageUrl(e.target.value)}}
                    className="messageSend_url"
                    placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </form>
            </div>


            <div className="messageSender_botton">
                 <div className="messageSender_option">
                 <VideoCallIcon  style={{color:"red"}}/>
                 <h3>Live Video</h3>
                 </div>

                 <div className="messageSender_option">
                 <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photo/Video</h3>
                 </div>
                 <div className="messageSender_option">
                 <InsertEmoticonIcon style={{color:"orange"}}/>
                     <h3>Feeling/Activity</h3>
                 </div>
            </div>
        </div>
    )
}

export default MessageSender
