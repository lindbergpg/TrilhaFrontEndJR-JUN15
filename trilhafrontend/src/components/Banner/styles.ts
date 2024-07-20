import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  height: 320px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.60;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
    position: relative;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 520px;
  text-align: center;
  margin: 0 auto;
  padding-top: 80px;
`
