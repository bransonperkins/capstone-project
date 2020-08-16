import React from 'react';
import "../css/SpotifyPlayer.css";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const SpotifyPlayer = props => {
  
  return (
    <Card>
      <CardBody className="text-white bg-dark" id="now-playing__side">
          <CardTitle className="now-playing__name">{props.item.name}</CardTitle>
          <CardSubtitle className="now-playing__artist">By: {props.item.artists[0].name}</CardSubtitle>
          <CardImg className="now-playing__img" src={props.item.album.images[0].url} />
      </CardBody>
    </Card>
  );
}

export default SpotifyPlayer;