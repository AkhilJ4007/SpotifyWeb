import React,{useEffect,useState} from 'react'
import "./MainBody.css"
import MusicListItem from "./MusicListItem"
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import {useDataLayerValue} from './DataLayer'

function MainBody() {

    const [{spotify,user,selectedPlaylist},dispatch] = useDataLayerValue()



    const [ currentPlaylist , setCurrentPlaylist] = useState(null);

    const [ songItems , setsongUIItems] = useState(null);

    const [ songsList , setsongList] = useState(null);



    useEffect(() => {
        if(spotify){

        spotify.searchPlaylists("Discover Weekly").then((playlist) => {
            if(playlist != null){
            return playlist
            }
        }).then((playlist) => {
    
            setCurrentPlaylist(playlist.playlists.items[0])
    
            spotify.getPlaylistTracks(playlist?.playlists.items[0]?.id).then((songs,err) => {
                setsongList(songs.items)
            })
        })
    }

    else{
        console.log("Spotify null");
    }

    }, [spotify])



    useEffect(() => {

        if(spotify && selectedPlaylist){
            
            spotify.getPlaylist(selectedPlaylist).then((songs)=>{
                console.log(songs)
                setCurrentPlaylist(songs)
                setsongList(songs.tracks.items)
            })
        }

    },[spotify,selectedPlaylist])


    useEffect(()=>{
        
        if(songsList){
            setsongUIItems( songsList.map((song,index) => {
                return <MusicListItem track = {song.track} index = {index} key = {song.track.id}/>
            }))

        }

    },[songsList])





    return (
        <div className = "mainBody">
            <div className = "main_top_bar" >
                <div className = "profile">
                    <img src = {user?.images[0].url} alt = "no image"/>
                    <span>{user?.display_name}</span>
                </div>
            </div>

            <div className = "topBar">

                <img src = {currentPlaylist?.images[0].url} alt = "no image"/>


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
        </div>
    )
}

export default MainBody
