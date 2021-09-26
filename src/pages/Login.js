import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm';
import { LoginMutation } from '../container/LoginMutation'


export const Login = ({ backto }) => {
    const { mutation, MutationLoading, MutationError } = LoginMutation()
    const { ActivateAuth } = useContext(Context)

    const onsubmit = (email, password) => {
        mutation({
            variables: {
                input: { email: email, password: password }
            }
        }).then(({ data }) => {
            const { login } = data
            ActivateAuth(login)

        })
    }

    const error = MutationError && 'Ups looks like something went wrong, user already exist or password or email are incorrect!'

    const message = "Don't have a account yet!"

    return (
        <UserForm path={backto} message={message} disable={MutationLoading} error={error} onsubmit={onsubmit} tittle='Sign in' />
    )

}
