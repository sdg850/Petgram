import React, { useEffect, useRef, useState } from 'react'
import { Button, Img, ImgWrapper, Article } from './style'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';


const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"



export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const key = `key_${id}`
    const [liked, setLiked] = useLocalStorage(key, false)
    const [show, ref] = useNearScreen()
    
    const IconLike = liked ? MdFavorite : MdFavoriteBorder;




    return (

        <Article ref={ref}>
            {
                show &&
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </a>

                    <Button onClick={() => setLiked(!liked)}>
                        <IconLike size='32px' /> {likes} likes!
                    </Button>

                </>

            }

        </Article>
    )
}


