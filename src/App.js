import React from 'react'
import { CategoryList } from './components/CategoryList'
import { GobalStyle } from './styles/GlobalStyle'
import { PhotoCardList } from './components/PhotoCardList'
import { Logo } from './components/Logo'


export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')

    console.log(urlParams)

    
    return (
    <div>
        < GobalStyle />
        < Logo/> 
        < CategoryList />
        < PhotoCardList categoryId={1} />
    </div>
)}