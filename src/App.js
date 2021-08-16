import React from 'react'
import { GobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWtihQuery';
import { Home } from './pages/Home';
import { Router } from '@reach/router';


export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')

    console.log(` urlParams ---->   ${urlParams}`)
    console.log(` urlParams ---->   ${detailId}`)


    return (
        <div>
            < GobalStyle />
            < Logo />
            {
                detailId
                    ? < PhotoCardWithQuery id={detailId} />
                    : <Router>
                        < Home path='/' />
                        < Home path='/pet/:id' />
                    </Router>




            }
        </div>
    )
}