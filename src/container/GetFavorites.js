import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { ListOfFavs } from './../components/ListOfFavs/index';


const query = gql`
  query getFavs{
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const GetFavorites = () => {

    const { loading, error, data } = useQuery(query,  { fetchPolicy: 'cache-and-network' })
    if (error) {
        return <h2>Internal Server Error</h2>
    }
    if (loading) {
        return <h2>Loading...</h2>
    }

    const { favs } = data

    return (
        <ListOfFavs favs = {favs} />
    )
}







