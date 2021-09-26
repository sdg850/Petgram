import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from './../components/UserForm/';
import { RegisterMutation } from '../container/RegisterMutation'
import { useLocation } from '@reach/router';

export const NotRegistered = () => {
    const { mutation, MutationLoading, MutationError } = RegisterMutation()
    const param = useLocation()
    const path = `${param.pathname}/Signin`

    const { ActivateAuth } = useContext(Context)

    const onsubmit = (email, password) => {
        mutation({
            variables: {
                input: { email: email, password: password }
            }
        }).then(({ data }) => {
            const { signup } = data
            ActivateAuth(signup)

        })
    }

    const error = MutationError && 'Ups looks like something went wrong, user already exist or password or email are incorrect!'

    const message = "You already have a account!"


    return (
        <UserForm path={path} message={message} disable={MutationLoading} error={error} onsubmit={onsubmit} tittle='Sign Up' />
    )
}
