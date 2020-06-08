import React from 'react';
import Main from './Main'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import Login from './pages/Login'
import Registration from './pages/Registration'

function CheckRegistration() {
  return
}

function App() {
  return (
  <div>
    <BrowserRouter>
      <Switch>
      <Route exact path="/"><Redirect to="/registration"></Redirect></Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/registration">
          <Registration></Registration>
        </Route>
        <Route><Main/></Route>
      </Switch>
    </BrowserRouter>
  </div>
  )
}

export default App;
