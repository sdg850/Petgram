import React from 'react'
import { GobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home';
import { Router } from '@reach/router';
import { Details } from './pages/Details';
import { NavBar } from './components/NavBar';
import Context from './Context';
import { User } from './pages/User';
import { Favs } from './pages/Favs';
import { NotRegistered } from './pages/NotRegistered';
import { Login } from './pages/Login';


export const App = () => {
    return (
        <div>
            <GobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Details path='/detail/:detailId' />
            </Router>
            <Context.Consumer>
                {
                    ({ isAuth }) =>
                        isAuth ? <Router>
                            <Favs path='/Favs' />
                            <User path='/User' />
                            <Favs path='/Favs/Signin' />
                            <User path='/User/Signin' />
                        </Router>
                            : <Router>

                                <Login path='/Favs/Signin' backto = '/Favs' />
                                <Login path='/User/Signin' backto = '/User' />

                                <NotRegistered path='/Favs' />
                                <NotRegistered path='/User' />

                            </Router>
                }
            </Context.Consumer>
            <NavBar />
        </div>
    )
}



