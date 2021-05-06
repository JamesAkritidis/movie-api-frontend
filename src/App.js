import React from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="App__main-and-sidebar">
                <Sidebar />
                <Switch>
                    <Route exact path="/movie-api-frontend"></Route>
                    <Route path="/movie-api-frontend/:userid">
                        <Main />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
