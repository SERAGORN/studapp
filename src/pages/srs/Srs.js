import React from 'react'
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import SrsCard from './components/SrsCard'
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
const fakeData = [
    {
        date: "30 мая",
        items: [
            {
                subj: "Математика",
                title: "Умножить 2х2"
            },
            {
                subj: "Русский",
                title: "Научиться читать"
            },
            {
                subj: "Моя жена рожает",
                title: "Выродить детей для щенят"
            },
        ]
    },
    {
        date: "31 мая",
        items: [
            {
                subj: "Физкультура",
                title: "Убить физрука"
            }
        ]
    },
    {
        date: "Конец 2020",
        items: [
            {
                subj: "ВЫЖИТЬ",
                title: "ПРОСТО ВЫЖИТЬ"
            }
        ]
    },
]
const useStyles = makeStyles((theme) => ({
    container: {
        margin: 16
    },
    button: {
        position: 'fixed',
        bottom: 16,
        right: 16
    }
}))
function Day(props) {
    const classes = useStyles()
    return (<>
        <Typography className={classes.container} component="h1" variant="h5" color="primary" gutterBottom>
            {props.data.date}
        </Typography>
        {props.data.items.map(row => {
            return <SrsCard data={row}></SrsCard>
        })}
    </>)
}

function Srs(props) {
    const classes = useStyles()
    return (<>
        <Fab onClick={()=> props.history.push("/addsrs")}className = {classes.button} color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        {fakeData.map(row => {
            return <Day data={row}></Day>
        })}
    </>)
}

export default withRouter(Srs)