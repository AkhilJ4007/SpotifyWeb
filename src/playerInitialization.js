


export const onSpotifyWebPlaybackSDKReady = ({token,onDeviceIDReady,playerPaused,thisSong,nextSong}) => () => {
    const player = new window.Spotify.Player({
    name: 'Akhils Player',
    getOAuthToken: cb => { cb(token); }
    });
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
    // Playback status updates
    player.addListener('player_state_changed', state => { 
        console.log(state);
        if(state?.paused){
            playerPaused({position:state.position,currentTrack:state.track_window.current_track})

        }
        else if(!state?.paused){
            nextSong(state.track_window.current_track)
        }
    
    });
    // Ready
    player.addListener('ready', ({ device_id }) => {
    console.log('Ready with Device ID', device_id);
    onDeviceIDReady(device_id)
    });
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });
    // Connect to the player!
    player.connect();
};




