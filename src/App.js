import React from 'react'
import { CategoryList } from './components/CategoryList'
import { GobalStyle } from './styles/GlobalStyle'
import { PhotoCardList } from './components/PhotoCardList'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWtihQuery';


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
                    : <>
                        < CategoryList />
                        < PhotoCardList categoryId={2} />
                    </>
            }
        </div>
    )
}