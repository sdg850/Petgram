import React from 'react'
import { PhotoCard } from '../PhotoCard/index';
import { query } from '../../container/query';

export const PhotoCardList = ({ categoryId }) => {
  const { loading, error, data  } = query(categoryId)

    if (error) {
        return <h2>Internal Server Error</h2>;
    }
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <ul>
            {data.photos.map((photo) => (
                <PhotoCard key={photo.id} {...photo} />
            ))}
        </ul>
    );
};

