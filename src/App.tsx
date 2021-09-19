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
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [mailSubject, setMailSubject] = useState<string>("");
  const [mailText, setMailText] = useState<string>("");

  const setEmailDetails = (subject: string, text: string) => {
    setMailSubject(subject);
    setMailText(text);
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
            <form className="addSub" action="onSubmit" onClick={handleClick}>
              <TextField
                value={password}
                onChange={handleChange}
                id="standard-basic"
                label={`enter "admin"`}
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </form>
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
