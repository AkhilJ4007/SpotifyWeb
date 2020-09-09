export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientID = "67af5f779ce140bda5a7a5646ecbf3a2"

const scopes = ["user-read-playback-state","user-modify-playback-state","user-library-read","user-read-currently-playing","user-read-recently-played",
                "user-top-read"]

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {

    return window.location.hash.substring(1).split("&").reduce((initial, item) => {

        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
        

    },{})


}

