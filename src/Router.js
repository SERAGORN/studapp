import React from 'react'

import {
    Switch,
    Route
} from "react-router-dom"
import Schedule from './pages/schedule/Schedule'
import Srs from './pages/srs/Srs'
import ScheduleEdit from './pages/ScheduleEdit'
import AddSrs from './pages/AddSrs'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	}
}))
function Router() {
	const classes = useStyles()
    return (
        <Container maxWidth="lg" className={classes.container}>
                <Switch>
                    <Route path="/editschedule">
                        <ScheduleEdit/>
                    </Route>
                    <Route path="/srs">
                        <Srs/>
                    </Route>
                    <Route path="/main">
                        <Schedule/>
                    </Route>
                    <Route>
                        <AddSrs path="/addsrs"/>
                    </Route>
                </Switch>
        </Container>
    )
}

export default Router;