import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.header`
  border-top: 1px solid ${colors.red};
  padding: 24px;
  margin-top: 48px;
  position: relative;

  p {
    text-align: center;
    margin: 32px 0 12px;
    font-size: 12px;
  }
`

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 180px;
  }
`

export const Links = styled.ul`
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-bottom: 16px;

  a {
    color: ${colors.white};
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    color: ${colors.red};
    transition: ease-in-out 0.4s;
  }
`
