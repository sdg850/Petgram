import React from 'react'
import Context from '../Context'
import { UserForm } from './../components/UserForm/';
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegistered = () => {
    const { mutation } = RegisterMutation()

    return (
        <Context.Consumer >
            {
                ({ ActivateAuth }) => {


                    const onsubmit = (email, password) => {
                        mutation({
                            variables: {
                                input: { email: email, password: password }
                            }
                        }).then(ActivateAuth)
                    }


                    return (
                        <UserForm onsubmit={onsubmit} tittle='Sign Up' />
                    )
                }


            }
        </Context.Consumer>
    )
}
