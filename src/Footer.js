import React, {useEffect,useState} from 'react'
import "./Footer.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Slider from '@material-ui/core/Slider';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import {useDataLayerValue} from './DataLayer'


function Footer() {

    const [{selectedSong,spotify,device_id,currentPlaylist,paused_details},dispatch] = useDataLayerValue()

    const [ playButton , setPlayButton] = useState(true);

    const artists = selectedSong?.artists?.map((artist) => {
        return artist.name
    })


    useEffect(() => {
        if(selectedSong){

        spotify.play({device_id: device_id,context_uri: currentPlaylist?.uri, offset:{uri:selectedSong?.uri}}).then((response,error) => {

            setPlayButton(false)
            
        })
        }

    }, [selectedSong])


    useEffect(() => {

        if(paused_details?.currentTrack?.duration_ms - paused_details?.position < 100){
            skipToNext()
        }
    
    }, [paused_details])



    const onPlayorPause = () => {

        if(playButton){
            setPlayButton(false)
            spotify.play({device_id: device_id,context_uri: paused_details?.currentTrack?.album?.uri, offset:{uri: paused_details?.currentTrack?.uri}, position_ms:paused_details?.position})
        }
        else{
            console.log("Pause clicked")
            spotify.pause().then((response) => {
                setPlayButton(true)
            })
        }

    }


    const skipToNext = () => {
        spotify.skipToNext()
    }

    const skipToPrev = () => {
        spotify.skipToPrevious()
    }






    return (
        <div className = "footer">
            <div className = "footer_left">
                
                

                    <img src = {selectedSong?.album?.images[2].url} alt = "no image"/>
                    
                    <div>

                        <p><strong>{selectedSong?.name}</strong></p>
                        {artists ? <p>{artists}</p> : null}

                    </div>

            

            </div>

            <div className = "footer_center">

                <div className = "buttons">
                    
                    <SkipPreviousIcon onClick = {skipToPrev} />
                    <span onClick = {onPlayorPause}>
                    {playButton ? <PlayArrowIcon/> : <PauseCircleFilledIcon/>}
                    </span>
                    <SkipNextIcon onClick = {skipToNext}/>
                </div>

                <div className= "slider">
                <Slider/>
                </div>

            </div>

            <div className = "footer_right">

                <VolumeDownIcon/>
                <Slider className = "volume"/>

            </div>
        </div>
    )
}

export default Footer
