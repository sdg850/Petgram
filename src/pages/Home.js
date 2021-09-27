import React from 'react'
import { CategoryList } from './../components/CategoryList/index';
import { PhotoCardList } from './../components/PhotoCardList/index';
import { Layout } from '../components/Layout';


const HomePage = ({ id }) => {
    return (

        <Layout tittle='Home' subTittle='Home' >
            <CategoryList />
            <PhotoCardList categoryId={id} />
        </Layout>

    )
}

export const Home = React.memo(HomePage, (preProps, props) => {
    return preProps.id === props.id
})