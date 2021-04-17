import { accessUrl } from '../../../config/spotify'
require('dotenv').config()
const githubCID = process.env.REACT_APP_GITHUBCID

export const loginWithGitHub = () => {

    const url = 'localhost:3050/auth/github'
    window.open(url, '_self')
}

export const loginWithSpotify = () => {
    window.open(accessUrl, '_self')
}
