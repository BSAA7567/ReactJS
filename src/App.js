import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Todo from "./router/todo";
import Life from "./router/life";
import Nomatch from "./router/nomatch";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/todo">Todo List</Link>
                                </li>
                                <li>
                                    <Link to="/life">Lifecycle API</Link>
                                </li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route exact path="/"></Route>
                            <Route path="/todo">
                                <Todo/>
                            </Route>
                            <Route path="/life">
                                <Life/>
                            </Route>
                            <Route path="*">
                                <Nomatch/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
