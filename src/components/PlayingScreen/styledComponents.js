import styled from 'styled-components'

export const PlayingScreenContainer = styled.div`
  background-color: #223a5f;
  background-size: cover;
  height: 200vh;
  padding-top: 64px;
`
export const ChiocesListContainer = styled.div`
  width: 600px;
  height: 600px;
  margin-top: 70px;
  margin-left: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const Images = styled.img`
  width: 190px;
  height: 190px;
`
export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  width: 65px;
  height: 35px;
  border-radius: 4px;
  margin-right: 22px;
  margin-bottom: 12px;
  border-width: 0px;
`
export const RulesContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const PopupContainer = styled.div`
  padding: 12px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`
export const ImagesPopup = styled(Images)`
  width: 500px;
  height: 500px;
  margin: 8px;
`
export const CustomButtonPopup = styled.button`
  background-color: #ffffff;
  margin: 2px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 480px;
`
export const CustomButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`
export const ResultViewContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ComparisionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 35px;
  margin-right: 35px;
`
export const YouContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  font-family: 'Roboto';
`
export const YouImages = styled(Images)`
  width: 120px;
  height: 120px;
`
export const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MessageResult = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  text-align: center;
`
export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  border-radius: 8px;
  border-width: 0px;
  width: 140px;
  height: 40px;
  font-weight: bold;
`
