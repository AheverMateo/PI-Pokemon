import './App.css';
import {Home, Details, Landing, Forms} from "./Views/index"
import { Route, Switch} from 'react-router-dom';


function App() {
  return (
    <div>
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
