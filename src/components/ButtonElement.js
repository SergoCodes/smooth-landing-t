import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  padding: ${({big}) => big ? '14px 48px' : '12px 30px'};
  border: none;
  border-radius: 50px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: ${({primary}) => primary ? '#01bf71' : '#010606'};
  color: ${({dark}) => dark ? '#010606' : 'white'};
  
  outline: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  
  &:hover {
    background: ${({primary}) => primary ? 'white' : '#01bf71'};
  }
`
