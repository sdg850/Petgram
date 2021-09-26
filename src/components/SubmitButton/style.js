import styled from "styled-components"

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