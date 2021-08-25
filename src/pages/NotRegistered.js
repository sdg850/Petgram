import React from 'react'
import Context from '../Context'
import { UserForm } from './../components/UserForm/';

export const NotRegistered = () => {
    return (
        <Context.Consumer >
            {
                ({ ActivateAuth }) => {
                    return (
                        <UserForm onsubmit={ActivateAuth} tittle='Sign Up' />
                    )
                }


            }
        </Context.Consumer>
    )
}
