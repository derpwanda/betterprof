import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import MainView from "./components/pages/Main";
import About from "./components/pages/About";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navigation title='Better Professor' />
                    <div>
                        <Route exact path='/about' component={About} />
                        <Route exact path='/' component={MainView} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
