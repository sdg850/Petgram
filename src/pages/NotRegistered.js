import React from 'react'
import Context from '../Context'
import { UserForm } from './../components/UserForm/';
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegistered = () => {
    return (
        <Context.Consumer >
            {
                ({ ActivateAuth }) => {
                    const { mutation } = RegisterMutation()

                    const onsubmit = (input) => {
                        const input = input;
                        const variables = { input: input };
                        mutation({ variables: variables }).then(ActivateAuth);
                    }

                    return (
                        <UserForm onsubmit={onsubmit} tittle='Sign Up' />
                    )
                }
            }
        </Context.Consumer>
    )
}
