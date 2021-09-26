import React from 'react'
import { GetFavorites } from './../container/GetFavorites';
import { Layout } from '../components/Layout';


export const Favs = () => {
    return (
        <Layout tittle='favorites' subTittle='Your favorites Photos' isVisible='subTitle' >
            <GetFavorites />
        </Layout>

    )
}
