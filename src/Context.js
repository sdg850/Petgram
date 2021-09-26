import React, { useState, createContext } from 'react'

export const Context = createContext()


const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('UserSessionToken');
    })

    const value = {
        isAuth,
        ActivateAuth: token => {
            setIsAuth(true)
            window.sessionStorage.setItem('UserSessionToken', token)
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
    Consumer: Context.Consumer

}
