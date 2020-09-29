export const initialState = {
    user: null,
    playlists : [],
    playing : false,
    item : null,
    spotify: null,
    playlistSongs: null,
    // remove after done developing
    token: "",
    selectedPlaylist: null,
    selectedSong: null,
    device_id: null,
    currentPlaylist: null,
    selectedPlaylist_ID: null,
    position: null,
    paused_details: null


};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){

        case 'SET_API':
            return({
                ...state,
                spotify : action.spotify
            })

        case 'SET_USER': 
        return(
            {
                ...state,
                user : action.user
            }
        )
        
        case 'SET_TOKEN': 
        return(
            {
                ...state,
                token : action.token
            }
        )

        case 'SET_PLAYLISTS':
            return({
                ...state,
                playlists: action.playlists
            })
        
        case 'SET_PLAYLIST_ID':
            return({
                ...state,
                selectedPlaylist_ID: action.selectedPlaylist_ID
            })

        case 'SET_SONG':
            return({
                ...state,
                selectedSong : action.selectedSong
            })

        case 'SET_DEVICE_ID':
            return({
                    ...state,
                    device_id : action.device_id
            })

        case 'SET_CURRENT_PLAYLIST':
            return(
                {
                    ...state,
                    currentPlaylist : action.currentPlaylist
                }
            )

        case 'SET_SONG_POSITION':
            {
                return({
                    ...state,
                    position: action.position
                })
            }
    
            case 'SET_PAUSED_DETAILS':
                {
                    return({
                        ...state,
                        paused_details: action.paused_details
                    })
                }
        

        default : return state

        
    }
}

export default reducer;