import React, {useState,useEffect} from 'react'
import "./MusicListItem.css"
import {useDataLayerValue} from './DataLayer'

function MusicListItem({track,index}) {

    const [{selectedSong},dispatch] = useDataLayerValue()

    const [ fontColor , setFontColor] = useState("rgba(228,226,224, 0.3)");

    const [trackId, setID] = useState(null)




    const seconds = () =>{ 

        const finalSeconds =  ((track?.duration_ms % 60000) / 1000).toFixed(0);

        return finalSeconds > 10 ? finalSeconds : '0' + finalSeconds;
    
    }



    useEffect(() => {


        if(selectedSong?.id === track?.id){
            setFontColor("rgba(228,226,224, 0.8)")
        }
        else{
            setFontColor("rgba(228,226,224, 0.3)")
        }
    
    }, [selectedSong])

    const songSelected = () => {

        dispatch({
            type: 'SET_SONG',
            selectedSong : track
        })

    }



    return (
        <div className = "itemContainer" style = {{color:fontColor}} onClick = {songSelected}>
            <div style = {{flex:0.1, paddingLeft:10}}>
                <p>{index + 1}</p>
            </div>
            
            <div className = "musicDescription" style = {{flex:0.4}}>
                <img src = {track?.album?.images[2]?.url}/>
                <div>
                    <h4>
                        {track?.name}
                    </h4>
                    <div>
                        {track?.artists.map((artist) => 
                        {
                            return artist.name;
                        }).join(",")}
                    </div>
                </div>
            </div>

            <div style = {{flex:0.4}}>
                    <p>{track?.album?.name}</p>
            </div>

            <div style = {{flex:0.1}}>
                    <p className = "time">{`${Math.floor( track?.duration_ms / 60000)}:${seconds()}` }</p>
            </div>
        </div>
    )
}

export default MusicListItem;
