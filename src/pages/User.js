import React, { useContext } from 'react'
import { Layout } from '../components/Layout';
import { SubmitButton } from '../components/SubmitButton';
import { Context } from './../Context';



export const User = () => {
    const { RemoveAuth } = useContext(Context)

    return (
    <Layout tittle='User' subTittle='User'  isVisible = 'title'>
         <SubmitButton onClick={RemoveAuth}>Sign out </SubmitButton>
    </Layout>
    )




}
