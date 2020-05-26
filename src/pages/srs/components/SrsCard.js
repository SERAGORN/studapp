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
    container: {
        marginTop: 8,
        marginBottom: 8
    }
}))

function ScheduleCard(props) {
    const classes = useStyles()
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

    return <Grid className={classes.container} item xs={12} md={8} lg={9} onClick={()=>props.history.push("/editschedule")}>
        <Paper className={fixedHeightPaper}>
        <Typography component="h2" variant="h6"  gutterBottom>
            {props.data.subj}
        </Typography>
        <Typography  gutterBottom>
            {props.data.title}
        </Typography>
        </Paper>
    </Grid>
}

export default withRouter(ScheduleCard)