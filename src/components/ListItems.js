import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import {withRouter} from 'react-router-dom'


function Bar(props) {
    return (
        <div>
        <ListItem button onClick={()=>props.history.push("/main")}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Расписание" />
        </ListItem>
        <ListItem button onClick={()=>props.history.push("/srs")}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="СРС" />
        </ListItem>
      </div>
    )
}

export default withRouter(Bar)