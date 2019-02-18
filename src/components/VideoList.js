import React from "react";
import styled from "styled-components";

const List = styled.ul`
    padding:0;
    list-style-type:none;
`

const Item = styled.li`
   
    img {

        width: 100%;
        margin: .75em auto;
        cursor: pointer;
        color: #495057;
        /* border: 1px solid #ced4da; */
        border: ${props => props.active ? "2px solid pink":"1px solid #ced4da"};
        border-radius: .25rem;
        transition: all .3s ease-in-out;
        :hover {
            border-color: #283646;
            transform: scale(1.05);
        }
    }  
`
export const VideoList = props => {
    return (
        <List>
            {props.children}
        </List>
    )
}

export const VideoListItem = ({ video, selectedVideo, selectVideo }) => {
    return (
        <Item active={video===selectedVideo} onClick={()=>selectVideo(video)}>
            <img src={video.snippet.thumbnails.medium.url} />
        </Item>
    )
}