import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import { InputGroup, Input } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

class SpotifyPlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
          token: " ",
          deviceId: " ",
          loggedIn: false,
          error: " ",
          trackName: "Track Name",
          artistName: "Artist Name",
          albumName: "Album Name",
          albumCover: "Album Image",
          playing: false,
          position: 0,
          duration: 1,
        };
        this.playerCheckInterval = null;
      }
    
      handleLogin(){
        if(this.state.token !== " "){
          this.setState({ loggedIn: true });
    
          this.playerCheckInterval = setInterval(() => this.checkForPlayer(), 1000);
        }
      }
    
      onPrevClick(){
        this.player.previousTrack();
      }
    
      onPlayClick(){
        this.player.togglePlay();
      }
    
      onNextClick(){
        this.player.nextTrack();
      }
    
      checkForPlayer(){
        const { token } = this.state;
    
        // if the SDK has loaded
        if(window.Spotify !== null){
          // cancel the interview
          clearInterval(this.playerCheckInterval);
          //create a new player
          this.player = new window.Spotify.Player({
            name: "Gaming Lounge Player",
            getOAuthToken: cb => {cb(token); },
          });
          // set up the players even handlers
          this.createEventHandlers();
          // connect finally
          this.player.connect();
        }
      }
    
      tranferPlaybackHere(){
        const { deviceId, token } = this.state;
        
        fetch("https://api.spotify.com/v1/me/player", {
          method: "PUT",
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "device_ids" : [ deviceId ],
            // true: start playing music if it was paused on the other device
            // false: paused if paused on other device, start playing mush other wise
            "play": true,
          }),
        });
      }
    
      createEventHandlers() {
        // problem setting up the player
        this.player.on('initialization_error', e => { console.error(e);});
        // problem authenticationng the user
        // either the token was invalid in the first place
        // or it expired (it only last an hour)
        this.player.on('authentication_error', e => {
          console.error(e);
          this.setState({ loggedIn: false});
        });
        // currently only premium account can use the API
        this.player.on('account_error', e => { console.error(e);});
        // loading/playing the track failed for some reason
        this.player.on('playback_error', e => { console.error(e);});
    
        //Playback status updates
        this.player.on('player_state_changed', state => this.onStateChanged(state));
        
        //Ready
        this.player.on('ready', async data =>{
          let { device_id } = data;
          console.log("let the Music play on!");
          // set thte deviceId variable, then let's try
          // to swap music playback to our player
          await this.setState({deviceId: device_id});
          this.tranferPlaybackHere();
        });
      }
    
      onStateChanged(state){
        // if we are no longer listening to music, we'll get a null state.
        if(state !== null){
          const {
            current_track: currentTrack,
            position,
            duration,
          } = state.track_window;
          const trackName = currentTrack.name;
          const albumName = currentTrack.album.name;
          const albumCover = currentTrack.album.images[0].url
          const artistName = currentTrack.artists
                .map(artist => artist.name)
                .join(", ");
          const playing = !state.paused;
          this.setState({
            position,
            duration,
            trackName,
            albumName,
            albumCover,
            artistName,
            playing
          });
      } else {
        this.setState({erro: "Looks like you might have swapped to another device"})
      }
    }
      
      render(){
        const { 
        token,
        loggedIn,
        artistName,
        trackName,
        albumName,
        albumCover,
        error,
        playing,
         } = this.state;
      
         return (
          <div className="App container w-75">
          <div className="">
            <h2>Listen to your Spotify playlist</h2>
            
          </div>
      
             {error && <p> {error}</p>} 
      
            {loggedIn ?
            (<div>
              <h2>Now Playing</h2>
              <Card className="">
                <CardImg src= {albumCover}/>
                <CardBody className="text-white bg-dark">
                  <CardTitle>{trackName}</CardTitle>
                  <CardSubtitle>By: {artistName}</CardSubtitle>
                  <CardText>On Album: {albumName}</CardText>
                </CardBody>
                <ButtonGroup>

                <Button color="info" onClick={() => this.onPrevClick()}>Previous</Button >
                <Button color="danger" onClick={() => this.onPlayClick()}>{playing ? "Pause" : "Play"}</Button>
                <Button color="warning" onClick={() => this.onNextClick()}>Next</Button>
                </ButtonGroup>
              </Card>
            </div>)
            :
            (<div>
              <p className="App-intro">
                Enter your Spotify access token. Get it from{" "}
                <Button color="success"href="https://beta.developer.spotify.com/documentation/web-playback-sdk/quick-start/#authenticating-with-spotify" target="blank">
                  Spotify Web Player Access Token
                </Button>
              </p>
              
              <div>
                <InputGroup size="sm"  >
                  <Input type="text" value={token} onChange={e => this.setState({ token: e.target.value })} />
                </InputGroup>
              </div>
              <div>
                <Button color="success" onClick={() => this.handleLogin()} >Go</Button>
              </div>
            </div>)
            }
          </div>
        );
      }

}

export default SpotifyPlayer;