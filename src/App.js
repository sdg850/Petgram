import React from 'react'
import { CategoryList } from './components/CategoryList'
import { GobalStyle } from './styles/GlobalStyle'
import { PhotoCardList } from './components/PhotoCardList'
import { Logo } from './components/Logo'


export const App = () => {
    return (
    <div>
        < GobalStyle />
        < Logo/> 
        < CategoryList />
        < PhotoCardList />
    </div>
)}