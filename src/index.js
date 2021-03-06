import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import Context from './Context';



const httpLink = createHttpLink({
    uri: "https://petgram-server-12ogghb1e-sdg850.vercel.app/graphql"
})

const authLink = setContext((_, { headers }) => {
    const token = window.sessionStorage.getItem('UserSessionToken')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const errorMiddleware = onError(({ networkError }) => {
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('UserSessionToken')
      window.location = '/'
    }
  })

const client = new ApolloClient({
    link: authLink.concat(httpLink).concat(errorMiddleware),
    cache: new InMemoryCache()
})

ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>
    , document.getElementById('app'))
