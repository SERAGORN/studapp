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

function AddSrs() {
    const classes = useStyles()
    return (
    <>
        <TextField className={classes.input} id="standard-basic" label={"Пара"} />
        <TextField className={classes.input} id="standard-basic" label={"СРС"} />
        <Button className={classes.button} variant="contained" color="primary" disableElevation>
            Добавить
        </Button>
    </>)
}

export default AddSrs