import React from 'react'
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'

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

function ScheduleCard(props) {
    const classes = useStyles()
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return <Grid item xs={12} md={8} lg={9} onClick={()=>props.history.push("/editschedule")}>
        <Paper className={fixedHeightPaper}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {props.data.day}
        </Typography>
            <ListOfSchedules data={props.data.schedules}/>
        </Paper>
    </Grid>
}

function ListOfSchedules(props) {
    return props.data.map(row => {
        return (<ListItemText primary={row}/>)
    })
}

export default withRouter(ScheduleCard)