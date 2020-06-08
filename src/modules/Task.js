import {fetchPost} from "./Fetch"
import {getEmailPassword} from "./Authorization"

let addTask = async (text, date) => {
    let groupId = 1
    let auth = getEmailPassword()
    let res = await fetchPost({
        email: auth.email,
        password: auth.pass,
        text: text,
        expire: date,
    }, "settask?group_id=" + groupId)
    return
}

let getTasks = async () => {
    let groupId = 1
    let auth = getEmailPassword()
    let tasks = await fetchPost({
        email: auth.email,
        password: auth.pass,
    }, "gettasks?group_id=" + groupId)
    console.log(tasks)
    return tasks
}

export {
    addTask,
    getTasks
}