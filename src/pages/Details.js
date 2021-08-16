import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWtihQuery';

export const Details = ({ detailId }) => {
    return (
        < PhotoCardWithQuery id={ detailId } />
    )
}
