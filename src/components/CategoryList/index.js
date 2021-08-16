import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './style'

// use only if we don't have n api available
// import { categories } from '../../../api/db.json'

const showCategories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect(function () {
        setLoading(true)
        fetch('https://petgram-server-24iykciv5.now.sh/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
            })
        setLoading(false)
    }, [])


    return {
        categories,
        loading
    }
}

export const CategoryList = () => {

    const [showFixed, setShowFixed] = useState(false)

    const { loading, categories } = showCategories()


    useEffect(function () {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200
            setShowFixed(newShowFixed)

        }

        document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll', onScroll)
        }

    }, [showFixed])


    const RenderList = (fixed) => (

        < List fixed={fixed} >
            {
                loading ? < Item key={item.id}>
                    cargandoooooo......
                </Item>
                    : categories.map(item =>
                        < Item key={item.id}>
                            < Category {...item} path = { `/pet/${item.id}`} />
                        </Item>
                    )
            }
        </List >

    )

    return (
        <>
            {showFixed && RenderList(true)}
            {RenderList()}
        </>


    )
}