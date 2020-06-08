import React from 'react'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ScheduleCard from './components/ScheduleCard'
import {getSubjects} from "../../modules/Subject";
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from 'react-router-dom'


function Schedule() {
	return (<>
			<Grid container spacing={3}>
				{/* Chart */}
				<MapSchedules />
			</Grid>
			</>
	)
}

const useStyles = makeStyles((theme) => ({
	container: {
		margin: 16
	},
}))
function MapSchedules(props) {
	const classes = useStyles()

	const [subjects, setSubjects] = React.useState(false)
	React.useEffect(()=> {
		if (!subjects) {
			waiter()
		}
	}, [])
	const waiter = async () => {
		const res = await getSubjects()
		setSubjects(res)
	}
	if (subjects && subjects[0]) {
		return (
			subjects.map(row => <ScheduleCard data={row}></ScheduleCard>)
		)
	} else {
		return <Typography className={classes.container} component="h1" variant="h5" color="primary" gutterBottom>
			Упс, заданий пока нет :)
		</Typography>
	}
}


export default withRouter(Schedule)