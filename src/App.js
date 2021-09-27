import React, { Suspense, useContext } from 'react'
import { GobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Home } from './pages/Home';
import { Redirect, Router } from '@reach/router';
import { NavBar } from './components/NavBar';
import { Context } from './Context';
// import { User } from './pages/User';
// import { Favs } from './pages/Favs';
// import { NotRegistered } from './pages/NotRegistered';
// import { Login } from './pages/Login';
// import { NotFound } from './pages/NotFound';
// import { Details } from './pages/Details';


const Favs = React.lazy(()=> import('./pages/Favs'))
const Details = React.lazy(()=> import('./pages/Details'))
const Login = React.lazy(()=> import('./pages/Login'))
const NotFound = React.lazy(()=> import('./pages/NotFound'))
const NotRegistered = React.lazy(()=> import('./pages/NotRegistered'))
const User = React.lazy(()=> import('./pages/User'))




export const App = () => {
    const { isAuth } = useContext(Context)
    return (
        <Suspense fallback = {<div />}>
            <GobalStyle />
            <Logo />
            <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
                <Details path='/detail/:detailId' />
                <NotFound default />
                {!isAuth && <NotRegistered path='/Signup' />}
                {!isAuth && <Login path='/Signin' />}
                {!isAuth && <Redirect from='/Favs' to='/Signup' />}
                {!isAuth && <Redirect from='/User' to='/Signup' />}
                {isAuth && <Redirect from='/Signin' to='/' />}
                {isAuth && <Redirect from='/Signup' to='/' />}
                <Favs path='/Favs' />
                <User path='/User' />
            </Router>
            <NavBar />
        </Suspense>
    )
}



