import React from 'react'
import { Nav, Link } from './style'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'

export const NavBar = () => {
    return (
        <Nav>
            <Link to='/'> <MdHome size={SIZE} /> </Link>
            <Link to='/Favs'><MdFavoriteBorder size={SIZE} /></Link>
            <Link to='/Text'><MdPersonOutline size={SIZE} /></Link>
        </Nav>
    )
}
