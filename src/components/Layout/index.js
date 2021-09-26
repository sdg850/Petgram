import React from 'react'
import { Helmet } from 'react-helmet'
import { Div, Title, SubTitle } from './style'

export const Layout = ({ children, tittle, subTittle, isVisible }) => {
    return (
        <Div>
            <Helmet>
                {tittle && <title>{tittle} | Petgram</title>}
                {subTittle && <meta name='description' content={subTittle} />}
            </Helmet>



            {isVisible == 'title' &&
                <Title>{tittle}</Title>

            }

            {isVisible == 'subTitle' &&
                <SubTitle>{subTittle}</SubTitle>

            }

            {isVisible == 'both' && <>
                <Title>{tittle}</Title>
                <SubTitle>{subTittle}</SubTitle>
            </>
            }





            {children}



        </Div>
    )
}
