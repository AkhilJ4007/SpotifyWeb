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
    selectedSong: null
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
                selectedPlaylist: action.selectedPlaylist
            })

        case 'SET_SONG':
            return({
                ...state,
                selectedSong : action.selectedSong
            })
        

        default : return state

        
    }
}

export default reducer;