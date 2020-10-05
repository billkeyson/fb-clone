import React,{useState,useEffect} from 'react'
import StoryReel from './StoryReel'; 
import './Feed.css';  
import MessageSender from './MessageSender';
import Post from './Post';
import db from './firebase';
function Feed() {

    const [posts,setPost] =  useState([])

    useEffect(() => {
        db.collection('post').orderBy("timestamp","desc").onSnapshot(snapshot=>{
           setPost(snapshot.docs.map(doc =>(
               {id:doc.id,data:doc.data()}
               )))
        })
       
    }, [])
    return (
        <div className="feed">
            {/* storyReel */}
                <StoryReel />            
            {/* MessageSender */}
            <MessageSender />
            {/* Post */}

            {
                posts.map((post)=>(
                <Post
                key = {post.id}
                profilePic = {post.data.profilePic}
                message = {post.data.message}
                username = {post.data.username}
                image = {post.data.image}
                timestamp = {post.data.timestamp}
                     />))
            }

        </div>
    )
}

export default Feed
