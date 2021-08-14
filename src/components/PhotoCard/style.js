import styled from "styled-components";
import { fadein, fadein2 } from "../../styles/animation";



export const Article = styled.article`
 min-height: 200px;
`

export const ImgWrapper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  /* ${fadein({ time: '2s' })}; */
  ${fadein2({ time: '0.5s' })};
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2) ;
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`

export const Button = styled.button`
 padding-top: 8px;
 display: flex;
 align-items: center;
 background: transparent;
 border:none;

 & svg {
     margin-right: 0ch.4px;
 }
`
