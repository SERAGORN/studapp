import React from 'react'
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'
import {Link} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 'auto',
    },
}))

function ListOfSchedules(props) {
    return props.data.map((row, key) => {
        if (row.room == 0) {
            return (
                <div style={{display: "flex", flexDirection: "row", justifyContent:"start"}}>
                    <ListItemText width={20} primary={key}/>
                    <ListItemText primary={"Окошка"}/>
                </div>
            )
        } else {
            return (
                <div style={{display: "flex", flexDirection: "row"}}>
                    <ListItemText primary={key}/>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <ListItemText primary={row.name}/>
                        <ListItemText primary={row.professor}/>
                        <ListItemText primary={row.room}/>
                        <ListItemText primary={row.building}/>
                    </div>
                </div>)
        }
    })
}

function ScheduleCard(props) {
    const classes = useStyles()
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return <Grid item xs={12} md={8} lg={9}
        onClick={()=>props.history.push({
            pathname: "/editschedule/"+props.data.day
        })}>
        <Paper className={fixedHeightPaper}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.data.day}
        </Typography>
            <ListOfSchedules data={props.data.schedules}/>
        </Paper>
    </Grid>
}



export default withRouter(ScheduleCard)