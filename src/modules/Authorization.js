import {fetchPost} from "./Fetch"

let getEmailPassword = () => {
    let email = localStorage.getItem("email")
    let pass = localStorage.getItem("pass")
    if (email === null || pass === null) {
        return false
    }
    let res = {
        email: email,
        pass: pass
    }
    return res
}

let registration = async (email, username, password, groupId) => {
    let status = false
    let res = await fetchPost({
        email: email,
        username: username,
        password: password,
        groupId: groupId
    }, "registration")
    if (res && res.Status && res.Status === "success") {
        status = true
    }
    return status
}

let authorization = async (email, password) => {
    let status = false
    let res = await fetchPost({
        email,
        password
    }, "authorization")
    if (res && res.Status && res.Status === "success") {
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)
        status = true
    }
    return status
}


export {
    registration,
    authorization,
    getEmailPassword
}