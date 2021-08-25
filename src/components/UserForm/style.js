import styled from "styled-components";

export const Input = styled.input`
padding: .3rem;
border-radius: 10px;
width: 50%;
background-color: none;
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
 height: 15rem;
 background-color: rgba(0,0,0,0.2);
 border-radius: 10px;
 box-shadow: -7px 14px 10px rgba(0,0,0,0.1);

 &:hover{
     transform: scale(1.025);
     background-color: rgba(0,0,0,0.3);
 }
`

export const Tittle = styled.h2`
color: #c65f20;

`