import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {withRouter, useParams} from 'react-router-dom'
import {editSubject, getSubject} from "../modules/Subject";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	input: {
		width: "100%",
    },
    button: {
        width: "100%",
        marginTop: 16,
        height: 60
    }
}))

function SubjectEdit(props) {
    const classes = useStyles()
    const [name, setName] = React.useState(props.row.name)
    const [professor, setProfessor] = React.useState(props.row.name)
    const [room, setRoom] = React.useState(props.row.room)
    const [building, setBuilding] = React.useState(props.row.building)
    const onFormSubmit = (e) => {
        e.preventDefault()
        editSubject(props.day,props.row.index,name,professor,room,building)
    }
    return (
        <>
            <Typography component="h2" variant="h6" color="primary" style={{paddingTop: 16}} gutterBottom>
                {props.row.index + "-я пара"}
            </Typography>
            <form onSubmit={onFormSubmit}>
            <TextField value={name} onChange={e=>setName(e.target.value)} className={classes.input} id="standard-basic" label={"Название"}/>
            <TextField value={professor} onChange={e=>setProfessor(e.target.value)} className={classes.input} id="standard-basic" label={"Препод"}/>
            <TextField value={room} onChange={e=>setRoom(e.target.value)} className={classes.input} id="standard-basic" label={"Кабинет"}/>
            <TextField value={building} onChange={e=>setBuilding(e.target.value)} className={classes.input} id="standard-basic" label={"Здание"}/>
                <button style={{display:"none"}} type="submit">Submit</button>
            </form>
        </>
    )
}

function ScheduleEdit() {
    const classes = useStyles()
    let {day} = useParams()

    const [subjects, setSubjects] = React.useState(false)
    React.useEffect(()=> {
        if (!subjects) {
            waiter(day)
        }
    }, [])
    const waiter = async (day) => {
        let daySchedules = []
        for (let j = 1; j < 7; j++) {
            let res = await getSubject(day, j)
            daySchedules.push({
                name: res.name,
                room: res.room,
                building: res.building,
                professor: res.professor,
                index: j
            })
        }
        setSubjects(daySchedules)
    }
    if (subjects && subjects[0]) {
        return (
            <>
                {subjects.map(row=>{
                    return (<SubjectEdit day={day} row={row}/>)
                })}
                <Button className={classes.button} variant="contained" color="primary" disableElevation>
                    Сохранить
                </Button>
            </>)
    } else {
        return ""
    }
}

export default withRouter(ScheduleEdit)