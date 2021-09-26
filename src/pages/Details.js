import React from 'react'
import { Layout } from '../components/Layout';
import { PhotoCardWithQuery } from '../container/PhotoCardWtihQuery';


export const Details = ({ detailId }) => {
    return (
        <Layout tittle={`Photo ${detailId}`} subTittle='Detail' isVisible='both' >
            <PhotoCardWithQuery id={detailId} />
        </Layout>

    )
}
