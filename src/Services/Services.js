import axios from "./Axios"

export const loginService = (data) => {
    return axios.post("login/access-token",data)

}

export const signup = (data) => {
    return axios.post("/signup",data)
}


export const otpverification = (data) => {
    return axios.post("/signupotpverify",data)
}

export const products = (data) => {
    return axios.post("/allproductlistforsearch",data)
}
