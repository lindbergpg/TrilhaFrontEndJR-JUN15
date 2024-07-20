import styled from 'styled-components'
import { colors } from '../../styles'

export const ContainerInfor = styled.div`
  padding: 56px 0;
  background-color: ${colors.white};
  position: relative;
  }
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`


export const CardPersonalTastes = styled.div`
  display: block;
  width: 280px;
  text-align: center;

  span {
    color: ${colors.black};
    font-size: 96px;
    padding-top: 24px;
  }
`

export const TitlePersonal = styled.h3`
  font-size: 18px;
  margin: 24px 0;
  color: ${colors.black};
`

export const Description = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: ${colors.black};
  `
