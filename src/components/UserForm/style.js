import styled from "styled-components";
import { Link as LinkRouter } from '@reach/router'


export const Link = styled(LinkRouter)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #888;
  height: 100%;
  text-decoration: none;
  width: 100%;

  &::hover{
      color: #000;
  }
`

export const Input = styled.input`
padding: .3rem;
border-radius: 10px;
width: 50%;
background-color: none;

&[disabled]{
    opacity: 0.9;
}
`
export const Button = styled.button`
padding: .5rem;
border-radius: 10px;
width: 50%;
background-color: #0000ff;
color: white;

&:hover{
    background-color: white;
    color: #0000ff;
}

&[disabled]{
    opacity: 0.9;
}
`

export const Form = styled.form`
display: flex;
align-items: center;
justify-content: center;
align-content: center;
flex-direction: column;
row-gap: 1.5rem;
 padding: 0.5rem;
 width: 90%;
 min-height: 15rem;
 height: auto;
 background-color: rgba(0,0,0,0.8);
 border-radius: 10px;
 box-shadow: -7px 14px 10px rgba(0,0,0,0.1);

 &:hover{
     transform: scale(1.025);
     }
`

export const Tittle = styled.h2`
color: #c65f20;
`

export const Error = styled.span`
 font-size: 0.8rem;
 color: red;
`