import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  PlayingScreenContainer,
  ChiocesListContainer,
  Images,
  RulesButton,
  RulesContainer,
  PopupContainer,
  ImagesPopup,
  CustomButtonPopup,
  CustomButton,
  ResultViewContainer,
  ComparisionContainer,
  YouContainer,
  Heading,
  YouImages,
  ResultContainer,
  MessageResult,
  PlayAgainButton,
} from './styledComponents'

import Header from '../Header'

class PlayingScreen extends Component {
  state = {playingView: true, url: '', opponentUrl: '', count: 0}

  componentDidMount() {
    const {choicesList} = this.props
    const opponent = choicesList[Math.floor(Math.random() * 3)]
    this.setState({opponentUrl: opponent.imageUrl})
  }

  updateUrl = value => {
    const {opponentUrl, count} = this.state
    this.setState({playingView: false, url: value.target.src})
    if (
      value.target.src ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
      opponentUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
    ) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else if (
      value.target.src ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
      opponentUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
    ) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else if (
      value.target.src ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
      opponentUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
    ) {
      this.setState(prevState => ({count: prevState.count + 1}))
    } else if (
      value.target.src ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
      opponentUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png'
    ) {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else if (
      value.target.src ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
      opponentUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png'
    ) {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else if (
      value.target.src ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
      opponentUrl ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png'
    ) {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else {
      this.setState({count})
    }
  }

  changeView = () => {
    this.setState({playingView: true})
  }

  renderResult = () => {
    const {url, opponentUrl} = this.state

    switch (true) {
      case url === opponentUrl:
        return <MessageResult>IT IS DRAW</MessageResult>
      case url ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
        opponentUrl ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png':
        return <MessageResult>YOU WON</MessageResult>
      case url ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
        opponentUrl ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png':
        return <MessageResult>YOU WON</MessageResult>
      case url ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
        opponentUrl ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png':
        return <MessageResult>YOU WON</MessageResult>
      case url ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png' &&
        opponentUrl ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png':
        return <MessageResult>YOU LOSE</MessageResult>
      case url ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png' &&
        opponentUrl ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png':
        return <MessageResult>YOU LOSE</MessageResult>
      case url ===
        'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png' &&
        opponentUrl ===
          'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png':
        return <MessageResult>YOU LOSE</MessageResult>
      default:
        return null
    }
  }

  render() {
    const {choicesList} = this.props
    const {playingView, url, opponentUrl, count} = this.state

    return (
      <>
        <PlayingScreenContainer>
          <Header choicesList={choicesList} count={count} />
          {playingView ? (
            <ChiocesListContainer>
              {choicesList.map(eachItem => (
                <CustomButton key={eachItem.id}>
                  <Images
                    src={eachItem.imageUrl}
                    alt={eachItem.id}
                    value={eachItem.imageUrl}
                    onClick={this.updateUrl}
                    data-testid={`${eachItem.id.toLowerCase()}Button`}
                  />
                </CustomButton>
              ))}
            </ChiocesListContainer>
          ) : (
            <ResultViewContainer>
              <ComparisionContainer>
                <YouContainer>
                  <Heading>YOU</Heading>
                  <YouImages src={url} alt="your choice" />
                </YouContainer>
                <YouContainer>
                  <Heading>OPPONENT</Heading>
                  <YouImages src={opponentUrl} alt="opponent choice" />
                </YouContainer>
              </ComparisionContainer>
              <ResultContainer>{this.renderResult()}</ResultContainer>
              <PlayAgainButton onClick={this.changeView}>
                PLAY AGAIN
              </PlayAgainButton>
            </ResultViewContainer>
          )}
          <Popup
            modal
            trigger={
              <RulesContainer>
                <RulesButton onClick={this.popupMsg}>Rules</RulesButton>
              </RulesContainer>
            }
          >
            {close => (
              <PopupContainer>
                <CustomButtonPopup>
                  <RiCloseLine onClick={() => close()} />
                </CustomButtonPopup>
                <ImagesPopup
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupContainer>
            )}
          </Popup>
        </PlayingScreenContainer>
      </>
    )
  }
}
export default PlayingScreen
