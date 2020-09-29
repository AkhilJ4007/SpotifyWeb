import React, {useEffect,useState} from 'react';
import './App.css';
import Login from './Login'
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './Player'
import {useDataLayerValue} from './DataLayer'

function App() {

  const spotify = new SpotifyWebApi();

  const [{token},dispatch] = useDataLayerValue()

  useEffect(() => {
    
  

    const hash = getTokenFromUrl()
    window.location.hash = ""
    const _token = hash.access_token
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token)

      dispatch({
        type: "SET_API",
        spotify: spotify
    })

      
      spotify.getMe().then((user)=>{
        dispatch({
          type: "SET_USER",
          user: user
        })
      })

      spotify.getUserPlaylists().then( (playlist) => {

        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlist
        })

      }

      )

      

    }

  }, [])



  return (
    
    <div className="app">
      {
        token ? <Player/> : <Login/>
      }
    </div>
  );
}

export default App;
