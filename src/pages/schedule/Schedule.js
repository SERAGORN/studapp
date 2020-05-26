import React from 'react'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ScheduleCard from './components/ScheduleCard'

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
        </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

function Schedule() {
	return (<>
			<Grid container spacing={3}>
				{/* Chart */}
				<MapSchedules />
			</Grid>
			<Box pt={4}>
				<Copyright />
			</Box>
			</>
	)
}

const data = [
	{
		day: "Понедельник",
		schedules: [
			"Физика Илларионова В.С 314каб",
			"Математика Красава В.С 312каб",
			"Хуятика ТаСамаяХуевая В.С 123каб",
			"Русятина ТаСамаяЗлая В.С 666каб",
		]
	},
	{
		day: "Вторник",
		schedules: [
			"Физика Илларионова В.С 314каб",
			"Математика Красава В.С 312каб",
			"Хуятика ТаСамаяХуевая В.С 123каб",
			"Русятина ТаСамаяЗлая В.С 666каб",
		]
	},
	{
		day: "Среда",
		schedules: [
			"Физика Илларионова В.С 314каб",
			"Математика Красава В.С 312каб",
			"Хуятика ТаСамаяХуевая В.С 123каб",
			"Русятина ТаСамаяЗлая В.С 666каб",
		]
	},
	{
		day: "Четверг",
		schedules: [
			"Физика Илларионова В.С 314каб",
			"Математика Красава В.С 312каб",
			"Хуятика ТаСамаяХуевая В.С 123каб",
			"Русятина ТаСамаяЗлая В.С 666каб",
		]
	},
	{
		day: "Пятница",
		schedules: [
			"Физика Илларионова В.С 314каб",
			"Математика Красава В.С 312каб",
			"Хуятика ТаСамаяХуевая В.С 123каб",
			"Русятина ТаСамаяЗлая В.С 666каб",
		]
	},
	{
		day: "Суббота",
		schedules: [
			"Физика Илларионова В.С 314каб",
			"Математика Красава В.С 312каб",
			"Хуятика ТаСамаяХуевая В.С 123каб",
			"Русятина ТаСамаяЗлая В.С 666каб",
		]
	},
]

function MapSchedules() {
	return (
		data.map(row => <ScheduleCard data={row}></ScheduleCard>)
  )
}


export default Schedule