export const initialState = {
    user: null,
    playlists : [],
    playing : false,
    item : null,
    // remove after done developing
    token: "BQB-qzF9mWUPZQLJiY2bi5GJsbJzxL6qs8AzvZhunVeXNElC7Ik8NTZZAZGK2MeYrC9tuFT9xY_liC4QGvxmGwAxvJljMyB6XGIlzLpr3N-GF85LXrLzMGyFCiDPaF6Kufg3ea6j9yjbb5BoZVLZexg_SsccVhxNvWDEqPtJU7dmNvecNomJ8KU3"
};

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
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

        default : return state

        
    }
}

export default reducer;