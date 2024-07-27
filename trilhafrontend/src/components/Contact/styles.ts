import styled from "styled-components"
import { colors } from "../../styles"

export const ContactContainer = styled.div`
  position: relative;
`

export const TitlePag = styled.h3`
  text-align: center;
  padding: 40px 0;
  font-size: 32px;
  color: ${colors.red};
`

export const TitleCard = styled.h4`
  padding: 24px 0;
  font-size: 24px;
  color: ${colors.red};
`

export const ContactsCard = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 12px;
    font-size: 32px;
  }
`

export const SocialMedia = styled.ul`
  display: flex;

  li {
    margin-right: 12px;
  }

  img {
    max-width: 32px;
    width: 100%;
  }
`
