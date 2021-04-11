require('dotenv').config()
const githubCID = process.env.REACT_APP_GITHUBCID
const loginWithGitHub = () => {
    const url = `https://github.com/login/oauth/authorize?client_id=${githubCID}`
    window.open(url, '_self')
}

export {loginWithGitHub}