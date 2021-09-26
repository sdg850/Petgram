import React from 'react'
import { CategoryList } from './../components/CategoryList/index';
import { PhotoCardList } from './../components/PhotoCardList/index';

export const Home = ({ id }) => {
    return (
        <>
            <CategoryList />
            <PhotoCardList categoryId={id} />
        </>
    )
}
