
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Nav from "./components/Nav";
import Form from "./components/Form";
import Subscribers from './components/Subscribers';
import Email from "./components/Email";
import Campaign from "./components/Campaign";

import './App.css';


function App() {
  return (
    <Router>
      
      <div className="App">
      <Nav/>
      <Switch>
          <Route path="/add">
            <Form />
          </Route>
          <Route path="/campaign">
            <Campaign />
          </Route>
          <Route path="/email">
            <Email />
          </Route>
          <Route path="/">
            <Subscribers />
          </Route>
        </Switch>

      </div>
    </Router>
    
  );
}

export default App;
