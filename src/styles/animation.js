import { keyframes, css } from "styled-components";

const fadeInKeyframes = keyframes`
 from{
     filter: blur(5px);
     opacity: 0;
 }

 to {
     filter: bluer(0px);
     opacity: 1;
 }
`

const fadeInKeyframes2 = keyframes`
 from{
     transform: scale(0);
    
 }
  to{
    transform: scale(1);
  }
`

export const fadein = ({ time = '1s', type = 'ease' } = {}) =>
    css`animation: ${time} ${fadeInKeyframes} ${type};`

export const fadein2 = ({ time= '1s', type ='ease' } = {}) =>
    css`animation: ${time} ${fadeInKeyframes2} ${type};`
