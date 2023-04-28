import styled from 'styled-components'

export const HeaderContainer = styled.div`
  border: 2px solid #ffffff;
  border-radius: 12px;
  margin-left: 65px;
  margin-right: 65px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ChoicesHeading = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-family: 'Roboto';
  margin-left: 12px;
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  width: 95px;
  height: 75px;
  margin-top: 4px;
  margin-right: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
`
export const ScoreHeading = styled.p`
  margin-top: 12px;
  color: #223a5f;
  font-size: 16px;
  font-family: 'Roboto';
`
export const Score = styled(ScoreHeading)`
  font-size: 18px;
  font-weight: bold;
`
