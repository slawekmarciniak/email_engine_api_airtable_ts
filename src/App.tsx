import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import AddSubscriber from "./components/AddSubscriber";
import Subscribers from "./components/Subscribers";
import CreateCampaigne from "./components/CreateCampaigne";
import Campaign from "./components/Campaign";
import { Button, Paper, TextField } from "@material-ui/core";
import "./App.css";

const enterPassword: string = "admin";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [mailSubject, setMailSubject] = useState("");
  const [mailText, setMailText] = useState("");

  const setEmailDetails = (subject: string, text: string) => {
    setMailSubject(subject);
    setMailText(text);
  };

  const handleClick = () => {
    if (password === enterPassword) {
      setIsLogged(true);
    } else alert("admin! :)");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <Router>
      <div className="App">
        {!isLogged && (
          <Paper className="loginContainer" elevation={3}>
            <TextField
              value={password}
              onChange={handleChange}
              id="standard-basic"
              label={`enter "admin"`}
            />
            <Button onClick={handleClick} variant="contained">
              Login
            </Button>
          </Paper>
        )}
        {isLogged && (
          <>
            <Nav />
            <Switch>
              <Route path="/add">
                <AddSubscriber />
              </Route>
              <Route path="/campaign">
                <Campaign setEmailDetails={setEmailDetails} />
              </Route>
              <Route path="/email">
                <CreateCampaigne
                  subject={mailSubject}
                  text={mailText}
                  setEmailDetails={setEmailDetails}
                />
              </Route>
              <Route path="/">
                <Subscribers />
              </Route>
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
