import React from 'react';
import Story  from './Story';
import './StoryReel.css';  

function StoryReel() {
    return (
        <div className="storyReel">
           <Story 
           image="https://static01.nyt.com/images/2019/11/28/world/28oz-jayz1/28oz-jayz1-mobileMasterAt3x.jpg"
           title={"Hello"}
           profileSrc= {"https://static01.nyt.com/images/2019/11/28/world/28oz-jayz1/28oz-jayz1-mobileMasterAt3x.jpg"}
           /> 
            <Story 
           title={"Hello"}
           profileSrc= {"https://static01.nyt.com/images/2019/11/28/world/28oz-jayz1/28oz-jayz1-mobileMasterAt3x.jpg"}
           /> 
            <Story 
           title={"Hello"}
           profileSrc= {"https://static01.nyt.com/images/2019/11/28/world/28oz-jayz1/28oz-jayz1-mobileMasterAt3x.jpg"}
           /> 
        </div>
    )
}

export default StoryReel
