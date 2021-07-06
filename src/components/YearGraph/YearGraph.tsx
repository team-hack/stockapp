// Written by Joey Essak-
// Imported Wrapper
import { Wrapper } from "./YearGraphStyled";
// FirstContainer Imported
import { MainContainer } from "./YearGraphStyled";
import { LabelOne } from "./YearGraphStyled";
import { LabelTwo } from "./YearGraphStyled";
import { LabelThree } from "./YearGraphStyled";
// SecondContainer Imported
import { SecondContainer } from "./YearGraphStyled";
import { LabelFour } from "./YearGraphStyled";
import { LabelFive } from "./YearGraphStyled";
import { LabelSix } from "./YearGraphStyled";
import { LabelSeven } from "./YearGraphStyled";
// ThirdContainer Imported
import { ThirdContainer } from "./YearGraphStyled";
import { ButtonOne } from "./YearGraphStyled";
import { ButtonTwo } from "./YearGraphStyled";
import { ButtonThree } from "./YearGraphStyled";
import { ButtonFour } from "./YearGraphStyled";
import { ButtonFive } from "./YearGraphStyled";
import { ButtonSix } from "./YearGraphStyled";
// FourthContainer Imported
import { FourthContainer } from "./YearGraphStyled";
import { StockChartPlaceholder } from "./YearGraphStyled";
import { PlaceholderMessage } from "./YearGraphStyled";
// FifthContainer Imported
import { FifthContainer } from "./YearGraphStyled";
import { BlockOne } from "./YearGraphStyled";
import { BlockOneMessage } from "./YearGraphStyled";
import { BlockTwo } from "./YearGraphStyled";
import { BlockTwoMessage } from "./YearGraphStyled";
import { BlockThree } from "./YearGraphStyled";
import { BlockThreeMessage } from "./YearGraphStyled";
// SixthContainer Imported
import { SixthContainer } from "./YearGraphStyled";
import { TitleText } from "./YearGraphStyled";
import { Subtext } from "./YearGraphStyled";
import { ButtonSeven } from "./YearGraphStyled";
// Creating a YearGraph JSX Element 
const YearGraph = ( ): JSX.Element => {
  return (
      <Wrapper>
        <MainContainer>
          <LabelOne>19.00</LabelOne>
          <LabelTwo>  /\  </LabelTwo>
          <LabelThree>0.10(0.53%)</LabelThree>
        </MainContainer>
        <SecondContainer>
        <LabelFour>19.33</LabelFour>
          <LabelFive>  /\  </LabelFive>
          <LabelSix>0.33(1.74%)</LabelSix>
          <LabelSeven>After Hours . June 29, 7:59PM EDT . Market Closed </LabelSeven>
        </SecondContainer>
        <ThirdContainer>
          <ButtonOne>Day</ButtonOne>
          <ButtonTwo>Week</ButtonTwo>
          <ButtonThree>Month</ButtonThree>
          <ButtonFour>Year</ButtonFour>
          <ButtonFive>5 Year</ButtonFive>
          <ButtonSix>Max</ButtonSix>
        </ThirdContainer>
        <FourthContainer>
          <StockChartPlaceholder>
            <PlaceholderMessage>I am a really cool 3d stock chart and this is my temporary placeholder I update in realtime and show you the Money!</PlaceholderMessage>
          </StockChartPlaceholder>
        </FourthContainer>
        <FifthContainer>
          <BlockOne>
            <BlockOneMessage>Open</BlockOneMessage>
          </BlockOne>
          <BlockTwo>
            <BlockTwoMessage>P/E</BlockTwoMessage>
          </BlockTwo>
          <BlockThree>
            <BlockThreeMessage>Vol</BlockThreeMessage>
          </BlockThree>
        </FifthContainer>
        <SixthContainer>
            <TitleText>Break Time</TitleText>
            <Subtext>This is awesome I think you got some what a grasp on this joey!</Subtext>
            <ButtonSeven>Follow</ButtonSeven>
        </SixthContainer>
      </Wrapper>
  );
};
// Exporting the created YearGraph JSX Element
export default YearGraph;