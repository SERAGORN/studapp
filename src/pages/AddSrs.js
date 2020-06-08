import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import {addTask} from "../modules/Task";
import {withRouter} from 'react-router-dom'

// import 'date-fns';


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

function AddSrs(props) {
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date)
    };
    let text
    const classes = useStyles()
    return (
    <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container >
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Дата сдачи"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
        <TextField className={classes.input} id="standard-basic" label={"Пара"} />
        <TextField className={classes.input} id="standard-basic" label={"СРС"} onChange={(e)=>text=e.target.value}/>
        <Button className={classes.button} variant="contained" color="primary" disableElevation
        onClick={async () => {
            let res = await addTask(text, selectedDate)
            props.history.push("/srs")
        }}
        >
            Добавить
        </Button>
    </>)
}

export default withRouter(AddSrs)