import React from 'react'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from './style';

export const FavButton = ({ likes, liked, onClick }) => {
    const IconLike = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Button onClick={onClick}>
            <IconLike size='32px' /> {likes} likes!
        </Button>
    )
}
