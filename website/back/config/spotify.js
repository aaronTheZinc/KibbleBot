const {
  REDIRECT_URI,
  CLIENT_ID,
  CLIENT_SECRET
} = process.env

export const SPOTIFY_OPTIONS = {
  redirectUri: REDIRECT_URI,
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
}