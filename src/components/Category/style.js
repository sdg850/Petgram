import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
display: flex;
flex-direction: column;
text-align: center;
text-decoration: none; 
width: 75px; 
`
export const Image = styled.img`
height: 75px;
width: 75px;
border: 1px solid #ddd;
border-radius: 50%;
box-shadow: 0px 10px 14px rgba(0,0,0,0.2);
overflow: hidden;
object-fit: cover;
`


