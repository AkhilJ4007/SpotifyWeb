import React, {useEffect} from 'react'
import "./Footer.css"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Slider from '@material-ui/core/Slider';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import {useDataLayerValue} from './DataLayer'


function Footer() {

    const [{selectedSong},dispatch] = useDataLayerValue()

    const artists = selectedSong?.artists?.map((artist) => {
        return artist.name
    })

    useEffect(() => {
        console.log("Footer " + selectedSong)
    }, [selectedSong])

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
                    <SkipPreviousIcon/>
                    <PlayArrowIcon/>
                    <SkipNextIcon/>
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
