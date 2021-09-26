import React, { useContext } from 'react'
import { SubmitButton } from '../components/SubmitButton';
import { Context } from './../Context';


export const User = () => {
    const { RemoveAuth } = useContext(Context)

    return <>
        <h1>User</h1>
        <SubmitButton onClick={RemoveAuth}>Sign out </SubmitButton>
    </>



}
