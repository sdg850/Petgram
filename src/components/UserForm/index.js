import React from 'react'
import { useInputValue } from './../../hooks/useInputValue';
import { Button, Form, Tittle, Input, Error } from './style';
import { Link } from './style';

export const UserForm = ({ onsubmit, tittle, error, disable, path, message }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onsubmit(email.value, password.value)
    }

    return (
        <Form disabled={disable} onSubmit={handleSubmit} >
            <Tittle> {tittle} </Tittle>
            <Input disabled={disable} type='email' placeholder='Your Email' {...email} />
            <Input disabled={disable} type='password' placeholder='Your password' {...password} />
            <Button disabled={disable} >{tittle}</Button>

            {error && <Error>{error}</Error>}

            <Link to={path}>{message}</Link>

        </Form>
    )
}
