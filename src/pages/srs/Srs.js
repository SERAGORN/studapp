import React from 'react'
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import SrsCard from './components/SrsCard'
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
import {getTasks} from "../../modules/Task";

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

const Srs = (props) => {
    const [tasks, setTasks] = React.useState(false)
    React.useEffect(()=> {
        if (!tasks) {
            waiter()
        }
    }, [])
    let waiter = async () => {
        let res = await getTasks()
        let obj = []
        for (let i = 0; i < res.length; i++) {
            let parsedDate = new Date(res[i].expire)
            let stringDate = (parsedDate.getFullYear().toString()+"-"+(parsedDate.getMonth()+1).toString()+"-"+parsedDate.getDate().toString())
            if (obj.length === 0) {
                obj = [{
                    date: stringDate,
                    items: [
                        {
                            subj: res[i].subject_id,
                            title: res[i].text
                        }
                    ]
                }]
            } else {
                let canPushNew = true
                for (let j = 0; j < obj.length ; j++) {
                    if (obj[j].date === stringDate) {
                        obj[j].items.push({
                            subj: res[i].subject_id,
                            title: res[i].text
                        })
                        canPushNew = false
                        break
                    }
                }
                if (canPushNew) {
                    obj.push({
                        date: stringDate,
                        items: [
                            {
                                subj: res[i].subject_id,
                                title: res[i].text
                            }
                        ]
                    })
                }
            }
        }
        setTasks(obj)
    }
    const classes = useStyles()
    if (tasks && tasks[0]) {
        console.log(tasks)
        return (<>
            <Fab onClick={()=> props.history.push("/addsrs")}className = {classes.button} color="primary" aria-label="add">
                <AddIcon />
            </Fab>
            {tasks.map(row => {
                return <Day data={row}></Day>
            })}
        </>)
    } else {
        return <Typography className={classes.container} component="h1" variant="h5" color="primary" gutterBottom>
            Упс, заданий пока нет :)
        </Typography>
    }

}

export default withRouter(Srs)