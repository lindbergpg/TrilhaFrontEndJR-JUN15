import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerInfor = styled.div`
  padding: 56px 0;
  position: relative;

  .container {
    div {
      display: flex;
      align-items: center;

      span {
        max-width: 200px;
        width: 100%;
        font-size: 160px;
        margin-left: 56px;
      }
    }
  }
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: ${colors.white};
  `
