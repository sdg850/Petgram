import React from 'react'
import { CategoryList } from './../components/CategoryList/index';
import { PhotoCardList } from './../components/PhotoCardList/index';
import { Layout } from '../components/Layout';


export const Home = ({ id }) => {
    return (

        <Layout tittle='Home' subTittle='Home' >
            <CategoryList />
            <PhotoCardList categoryId={id} />
        </Layout>

    )
}
