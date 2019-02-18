import React from "react";
import styled from "styled-components";

const Item = styled.div`
    margin-top: .75em;
    border-radius: .25rem;
    iframe {
        border-color: #283646;
    }  
`

const VideoDetail = ({ video }) => {
    
    if (!video) {
        return <p>Loading spinner goes here...</p>
    }

    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

    return (
        <>
            <Item className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
            </Item>
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
        </>
    )
}

export default VideoDetail;