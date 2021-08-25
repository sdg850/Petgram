import React from 'react'
import { useInputValue } from './../../hooks/useInputValue';
import { Button, Form, Tittle, Input } from './style';



export const UserForm = ({ onsubmit, tittle }) => {
    const email = useInputValue('')
    const password = useInputValue('')

    return (
        <Form onSubmit={onsubmit} >
        <Tittle> {tittle} </Tittle>
            <Input type='email' placeholder='Your Email' {...email} />
            <Input type='password' placeholder='Your password' {...password} />
            <Button>{tittle}</Button>
        </Form>
    )
}
