import React from 'react'
import { GobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home';
import { Router } from '@reach/router';
import { Details } from './pages/Details';


export const App = () => {
    return (
        <div>
            < GobalStyle />
            < Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Details path='/detail/:detailId' />
            </Router>
        </div>
    )
}