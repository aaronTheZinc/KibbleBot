require('dotenv').config()
const githubCID = process.env.REACT_APP_GITHUBCID

const loginWithGitHub = () => {
    const url = `http://localhost:3050/auth/github`
    window.open(url, '_self')
}

export {loginWithGitHub}