import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles/';

import { Navbar } from './components';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import themeObj from './utils/theme';

const theme = createMuiTheme(themeObj)

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="App">
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default App
