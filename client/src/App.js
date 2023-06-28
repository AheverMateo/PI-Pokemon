import './App.css';
import {Home, Details, Landing, Forms} from "./Views/index"
import { Route, Switch, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';


function App() {
  const {pathname} = useLocation ()
  return (
    <div>
    {pathname !=="/" && <NavBar/>}
    <Switch>
      <Route exact path = "/" component = {Landing}/>
      <Route exact path = "/Home" component = {Home}/>
      <Route exact path = "/forms" component = {Forms}/>
      <Route exact path = "/details/:id" component = {Details}/>
    </Switch>
   </div>
  );
}

export default App;
