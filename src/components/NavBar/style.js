import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadein2 } from '../../styles/animation'



export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  right: 0;
  left: 0;
  margin:0 auto;
  bottom: 0;
  max-width: 480px;
  height: 50px;
  border-top: 1px solid #e0e0e0;
  background-color: #fcfcfc;
  position: fixed;
  width: 100%;
  z-index: 1000;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #888;
  height: 100%;
  text-decoration: none;
  width: 100%;

  &[aria-current]{
      color: #000;

      &:after{
          ${fadein2( { time: '0.5s' } )}
          content: '·';
          position: absolute;
          bottom: 0;
          font-size: 40px;
          line-height: 20px;
          
        }
  }
`
