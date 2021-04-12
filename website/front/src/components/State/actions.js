require('dotenv').config()
const githubCID = process.env.REACT_APP_GITHUBCID

const loginWithGitHub = () => {

    const host = window.location.host
    console.log(host)
    const url = `${host}/auth/github`
    window.open(url, '_self')
}

export {loginWithGitHub}