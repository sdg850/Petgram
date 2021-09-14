import React from 'react'
import { RegisterMutation } from '../../container/RegisterMutation';
import { useInputValue } from './../../hooks/useInputValue';
import { Button, Form, Tittle, Input } from './style';

export const UserForm = ({ onsubmit, tittle }) => {
    const email = useInputValue('')
    const password = useInputValue('')   

    const handleSubmit = (e) => {
        e.preventDefault()
        onsubmit( email.value, password.value )
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Tittle> {tittle} </Tittle>
            <Input type='email' placeholder='Your Email' {...email} />
            <Input type='password' placeholder='Your password' {...password} />
            <Button>{tittle}</Button>
        </Form>
    )
}
