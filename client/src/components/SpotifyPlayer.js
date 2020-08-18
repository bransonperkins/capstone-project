import React from 'react';
import "../css/SpotifyPlayer.css";

const SpotifyPlayer = props => {
  
  return (

  <div className="songRow">
    <img className="songRow_album" src={props.item.album.images[0].url}/>
    <div className="songRow_info">
      <h3>{props.item.name}</h3>
      <p> By: {props.item.artists[0].name}</p>
    </div>
  </div>
  );
}

export default SpotifyPlayer;