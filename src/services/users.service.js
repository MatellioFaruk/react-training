import axios from "axios"
const instanceTwo = axios.create()
instanceTwo.defaults.baseURL = process.env.REACT_APP_API_BASE_URL


const instanceOne = axios.create()
instanceOne.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

instanceOne.interceptors.request.use((config) => {
    console.log("request middleware", config)
    config.headers.token = "Khan"
    return config
}, (error) => {
    console.log(error)
    return error
})

instanceOne.interceptors.response.use((response) => {
    console.log("response middleware", response)
    return Promise.resolve(response)
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

instanceTwo.interceptors.request.use((config) => {
    console.log("request middleware", config)
    config.headers.token = "Faruk"
    return config
}, (error) => {
    console.log(error)
    return error
})

instanceTwo.interceptors.response.use((response) => {
    console.log("response middleware", response)
    return response
}, (error) => {
    console.log(error)
    return error
})



export const getUsers = () => {
    return instanceOne.get(`/users`)
}

export const getUser = (userId) => {
    return instanceTwo.get(`/users/${userId}`)
}