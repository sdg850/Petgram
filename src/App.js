import React from 'react'
import { GobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home';
import { Router } from '@reach/router';
import { Details } from './pages/Details';
import { NavBar } from './components/NavBar';


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
            <NavBar />
        </div>
    )
}