require('dotenv').config()
const githubCID = process.env.REACT_APP_GITHUBCID

export const loginWithGitHub = () => {

    const host = window.location.host
    console.log(host)
    const url = `${host}/auth/github`
    window.open(url, '_self')
}

export const loginWithSpotify = () => {
    //Permissions(Needs refactoring)
    const url = "https://accounts.spotify.com/authorize?client_id=8b945ef10ea24755b83ac50cede405a0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
    window.open(url, '_self')
}