import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerInfor = styled.div`
  padding: 56px 0;

  .container {
    div {
      display: flex;
      align-items: center;
    }
  }
`

export const Description = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${colors.white};
  `

export const Photograph = styled.img`
  max-width: 280px;
  width: 100%;
  border-radius: 25% 0 25% 0;
  margin-left: 56px;
`
