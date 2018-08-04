import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const videos = props.video; If we don't do the curly braces and video, we put props and get video
  // this way
  const imageURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  return (
    <li onClick = {(event) => onVideoSelect(video)} className = "list-group-item">
      <div className = "video-list media">
        <div className = "media-left">
          <img className = "media-object" src = {imageURL} />
        </div>
        <div className = "media-body">
          <div className = "media-heading">{title}</div>
          <div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem
