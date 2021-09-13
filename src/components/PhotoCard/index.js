import React from 'react'
import { Img, ImgWrapper, Article } from './style'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';
import { FavButton } from '../FAvButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { Link } from '@reach/router';


const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"



export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const key = `key_${id}`
    const [liked, setLiked] = useLocalStorage(key, false)
    const [show, ref] = useNearScreen()

    const { mutation } = ToggleLikeMutation()

    const handleFavButton = () => {
        !liked && mutation({
            variables:{
                input: { id }
            }
        })
        setLiked(!liked)
    }

    return (

        <Article ref={ref}>
            {
                show &&
                <>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src} />
                        </ImgWrapper>
                    </Link>

                    <FavButton onClick={handleFavButton} likes={likes} liked={liked} />
                </>

            }

        </Article>
    )
}


