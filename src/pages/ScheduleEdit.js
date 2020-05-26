import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


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

const fakeData = [
    "Физика Илларионова В.С 314каб",
    "Математика Красава В.С 312каб",
    "Хуятика ТаСамаяХуевая В.С 123каб",
    "Русятина ТаСамаяЗлая В.С 666каб",
    "",
    "",
]

function ScheduleEdit() {
    const classes = useStyles()
    return (
    <>
        {fakeData.map((row, key)=>{
                return <TextField value={row} className={classes.input} id="standard-basic" label={++key + "-я пара"} />
        })}
        <Button className={classes.button} variant="contained" color="primary" disableElevation>
            Сохранить
        </Button>
    </>)
}

export default ScheduleEdit