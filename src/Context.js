import React, { useState, createContext } from 'react'

const Context = createContext()


const Provider = ({ children }) => {
    const [ isAuth, setIsAuth ] = useState(false)

    const value = {
        isAuth,
        ActivateAuth: () => {
            setIsAuth(true)
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>

    )
}

export default {
    Provider,
    Consumer:Context.Consumer

}
