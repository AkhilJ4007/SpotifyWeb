import React,{useEffect,useState} from 'react'
import "./MainBody.css"
import MusicListItem from "./MusicListItem"
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import {useDataLayerValue} from './DataLayer'
import Script from 'react-load-script'
import {onSpotifyWebPlaybackSDKReady} from './playerInitialization'

function MainBody() {

    const [{spotify,user,selectedPlaylist_ID,selectedSong,token},dispatch] = useDataLayerValue()



    const [ currentPlaylist , setCurrentPlaylist] = useState(null);

    const [ songItems , setsongUIItems] = useState(null);

    const [ songsList , setsongList] = useState(null);

    const [ songCheck, setSongCheck] = useState(null);

    const [deviceID, setID] = useState(null);



    useEffect(() => {
        if(spotify){

        spotify.searchPlaylists("Discover Weekly").then((playlist, err) => {
            if(playlist != null){
    
                setCurrentPlaylist(playlist.playlists.items[0])
    
                spotify.getPlaylistTracks(playlist?.playlists.items[0]?.id).then((songs,err) => {
                    setsongList(songs.items)
                })
            }

        })
    }

    else{
        console.log("Spotify null");
    }

    }, [spotify])


    useEffect(() => {

        if(currentPlaylist) {
        dispatch({
            type: "SET_CURRENT_PLAYLIST",
            currentPlaylist : currentPlaylist
        })
    }
    }, [currentPlaylist])



    useEffect(() => {

        if(spotify && selectedPlaylist_ID){
            
            spotify.getPlaylist(selectedPlaylist_ID).then((songs)=>{
                console.log(songs)
                setCurrentPlaylist(songs)
                setsongList(songs.tracks.items)
            })
        }

    },[spotify,selectedPlaylist_ID])


    useEffect(()=>{
        
        if(songsList){
            setsongUIItems( songsList.map((song,index) => {
                return <MusicListItem track = {song.track} index = {index} key = {song.track.id}/>
            }))

        }

    },[songsList])


    const onDeviceIDReady = (id) => {

        dispatch({
            type : "SET_DEVICE_ID",
            device_id : id
        })

    }


    const playerPaused =  (details) => {

        dispatch({
            type:"SET_PAUSED_DETAILS",
            paused_details: details
        })

    }

    useEffect(() => {

        console.log("THIs song " + JSON.stringify(selectedSong))

    },[selectedSong])

    const nextSong = (song) => {

        setSongCheck(song)
    }


    useEffect(() => {

        if(songCheck && selectedSong){

            if(songCheck?.uri !== selectedSong.uri){

                dispatch({
                    type:"SET_SONG",
                    selectedSong : songCheck
                })

            }


        }



    },[songCheck])


    const setSDK = () => {
        window.onSpotifyWebPlaybackSDKReady = onSpotifyWebPlaybackSDKReady({token:token,onDeviceIDReady:onDeviceIDReady,playerPaused:playerPaused,thisSong:selectedSong?.uri,nextSong:nextSong})
        
    }




    return (
        <div className = "mainBody">
            <div className = "main_top_bar" >
                <div className = "profile">
                    <img src = {user?.images[0].url} alt = "no image"/>
                    <span>{user?.display_name}</span>
                </div>
            </div>

            <div className = "topBar">

                <img src = {currentPlaylist?.images[0]?.url} alt = "no image"/>
                <div>

                    <h4>Playlist</h4>

                        <h1>{currentPlaylist?.name}</h1>

                        <p>{currentPlaylist?.description}</p>


                </div>

            </div> 
            
            <div className = "playBar">
            <PlayCircleFilledWhiteIcon/>
            </div>

            <div className = "songHeader">

                <p style = {{flex:0.1, paddingLeft:10}}>#</p>
                <p style = {{flex:0.4}}>TITLE</p>
                <p style = {{flex:0.4}}>ALBUM</p>
                <p style = {{flex:0.1}}>TIME</p>


            </div>

            <div className = "mainContent">
                {
                    songItems
                }
            </div>
            {
                setSDK()
            }
            <Script url = "https://sdk.scdn.co/spotify-player.js"/>
        </div>
        
    )
}

export default MainBody
