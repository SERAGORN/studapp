import React from 'react';
import Main from './Main'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom"
import Login from './pages/Login'
function App() {
  return (
  <div>
    <BrowserRouter>
      <Switch>
      <Route exact path="/"><Redirect to="/login"></Redirect></Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route><Main/></Route>
      </Switch>
    </BrowserRouter>
  </div>
  )
}

export default App;
