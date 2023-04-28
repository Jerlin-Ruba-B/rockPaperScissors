import {
  HeaderContainer,
  ChoicesHeading,
  ScoreContainer,
  ScoreHeading,
  Score,
} from './styledComponents'

const Header = props => {
  const {count} = props
  return (
    <HeaderContainer>
      <ChoicesHeading>
        Rock
        <br /> Paper
        <br /> Scissors
      </ChoicesHeading>

      <ScoreContainer>
        <ScoreHeading>Score</ScoreHeading>
        <Score>{count}</Score>
      </ScoreContainer>
    </HeaderContainer>
  )
}
export default Header
