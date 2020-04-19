import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop/shop";
import Login from "./pages/login/login";
import Header from "./components/header/header";
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {

        const {currentUser} = this.state;

        return (
            <div>
                <Header currentUser={currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={Login}/>
                </Switch>
            </div>
        )
    }
}

export default App;
