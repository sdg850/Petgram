import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://petgram-server-12ogghb1e-sdg850.vercel.app/graphql",
    cache: new InMemoryCache(),
});

ReactDOM.render(
    < ApolloProvider client={client}>
        < App />
    </ApolloProvider>


    , document.getElementById('app'))
