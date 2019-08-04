import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import ProfDash from "./components/pages/ProfDash";
import ProfView from "./components/pages/ProfView";
import StudDash from "./components/pages/StudDash";
import StudView from "./components/pages/StudView";
import About from "./components/pages/About";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navigation title='Better Professor' />
                    <div>
                        <Route exact path='/' component={ProfDash} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/ProfView' component={ProfView} />
                        <Route exact path='/StudDash' component={StudDash} />
                        <Route exact path='/StudView' component={StudView} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
