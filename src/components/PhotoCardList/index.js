import React from 'react'
import { PhotoCard } from '../PhotoCard/index';

export const PhotoCardList = () => (
    <ul>
        {[1, 2, 3, 4, 5, 6].map(id => <PhotoCard key={id} id={id} />)}
    </ul>
)