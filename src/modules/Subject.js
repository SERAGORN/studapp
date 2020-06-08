import {fetchPost} from "./Fetch";
import {getEmailPassword} from "./Authorization";

const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
let getSubject = async (weekday, index) => {
    let groupId = 1
    let auth = getEmailPassword()
    let res = await fetchPost({
        email: auth.email,
        password: auth.pass,
    }, "getschedule?group_id=" + groupId+"&weekday="+weekday+"&index="+index)
    return res
}

let getSubjects = async () => {
    let obj = []
    for (let i = 0; i < weekDays.length; i++) {
        let daySchedules = []
        for (let j = 1; j < 7; j++) {
            let res = await getSubject(weekDays[i], j)
            daySchedules.push({
                name: res.name,
                room: res.room,
                building: res.building,
                professor: res.professor,
                index: j
            })
        }
        obj.push({
            day: weekDays[i],
            schedules: daySchedules
        })
    }
    return obj
}

let editSubject = async (weekday, index, name, professor, room, building) => {
    let groupId = 1
    let auth = getEmailPassword()
    let res = await fetchPost({
        email: auth.email,
        password: auth.pass,
        name: name,
        professor: professor,
        room: parseInt(room),
        building: building,
    }, "editschedule?group_id=" + groupId+"&weekday="+weekday+"&index="+index)
}
export {
    getSubject,
    getSubjects,
    editSubject
}