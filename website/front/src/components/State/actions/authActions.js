import axios from 'axios'

import { SET_USER } from '../Types'

export const setCurrentUser = () => {
    axios
        .get("/api/users/profile")
        .then(res => {
            const user = res.data 
            return user
        })
}