// Written by Joey Essak-
// Imported Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
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
import { BlockOneContainerOne } from './YearGraphStyled';
import { BlockOneContainerTwo } from './YearGraphStyled';
import { BlockOneContainerThree } from './YearGraphStyled';
import { BlockOneLabelOne } from './YearGraphStyled';
import { BlockOneLabelTwo } from './YearGraphStyled';
import { BlockOneLabelThree } from './YearGraphStyled';
import { BlockOneLabelFour } from './YearGraphStyled';
import { BlockOneLabelFive } from './YearGraphStyled';
import { BlockOneLabelSix } from './YearGraphStyled';
import { BlockTwo } from "./YearGraphStyled";
import { BlockTwoContainerOne } from './YearGraphStyled';
import { BlockTwoContainerTwo } from './YearGraphStyled';
import { BlockTwoContainerThree } from './YearGraphStyled';
import { BlockTwoLabelOne } from './YearGraphStyled';
import { BlockTwoLabelTwo } from './YearGraphStyled';
import { BlockTwoLabelThree } from './YearGraphStyled';
import { BlockTwoLabelFour } from './YearGraphStyled';
import { BlockTwoLabelFive } from './YearGraphStyled';
import { BlockTwoLabelSix } from './YearGraphStyled';
import { BlockThree } from "./YearGraphStyled";
import { BlockThreeContainerOne } from './YearGraphStyled';
import { BlockThreeContainerTwo } from './YearGraphStyled';
import { BlockThreeContainerThree } from './YearGraphStyled';
import { BlockThreeLabelOne } from './YearGraphStyled';
import { BlockThreeLabelTwo } from './YearGraphStyled';
import { BlockThreeLabelThree } from './YearGraphStyled';
import { BlockThreeLabelFour } from './YearGraphStyled';
import { BlockThreeLabelFive } from './YearGraphStyled';
import { BlockThreeLabelSix } from './YearGraphStyled';
// SixthContainer Imported
import { SixthContainer } from "./YearGraphStyled";
import { TitleText } from "./YearGraphStyled";
import { Subtext } from "./YearGraphStyled";
import { ButtonSeven } from "./YearGraphStyled";
import { StyledLink } from './YearGraphStyled';
import { StyledLinkTwo } from './YearGraphStyled';

// Creating a YearGraph JSX Element 
const YearGraph = ( ): JSX.Element => {
  return (
      <Wrapper>
        <MainContainer>
          <LabelOne>19.00</LabelOne>
          <LabelTwo> <FontAwesomeIcon icon={faCaretUp}/> </LabelTwo>
          <LabelThree>0.10(0.53%)</LabelThree>
        </MainContainer>

        <SecondContainer>
        <LabelFour>19.33</LabelFour>
          <LabelFive> <FontAwesomeIcon icon={faCaretUp}/> </LabelFive>
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
            <PlaceholderMessage>
              I am a really cool 3d stock chart and this is my temporary placeholder I update in realtime and show you the Money!
            </PlaceholderMessage>
          </StockChartPlaceholder>
        </FourthContainer>
        
        <FifthContainer>
          <BlockOne>
            <BlockOneContainerOne>
              <BlockOneLabelOne>Open</BlockOneLabelOne>
              <BlockOneLabelTwo>18.08</BlockOneLabelTwo>
            </BlockOneContainerOne>
            <BlockOneContainerTwo>
              <BlockOneLabelThree>High</BlockOneLabelThree>
              <BlockOneLabelFour>19.97</BlockOneLabelFour>
            </BlockOneContainerTwo>
            <BlockOneContainerThree>
              <BlockOneLabelFive>Low</BlockOneLabelFive>
              <BlockOneLabelSix>17.99</BlockOneLabelSix>
            </BlockOneContainerThree>
          </BlockOne>
          <BlockTwo>
            <BlockTwoContainerOne>
              <BlockTwoLabelOne>P/E</BlockTwoLabelOne>
              <BlockTwoLabelTwo> -</BlockTwoLabelTwo>
            </BlockTwoContainerOne>
            <BlockTwoContainerTwo>
              <BlockTwoLabelThree>52wk High</BlockTwoLabelThree>
              <BlockTwoLabelFour>23.99</BlockTwoLabelFour>
            </BlockTwoContainerTwo>
            <BlockTwoContainerThree>
              <BlockTwoLabelFive>52wk Low</BlockTwoLabelFive>
              <BlockTwoLabelSix>5.63</BlockTwoLabelSix>
            </BlockTwoContainerThree>
          </BlockTwo>
          <BlockThree>
            <BlockThreeContainerOne>
              <BlockThreeLabelOne>Vol</BlockThreeLabelOne>
              <BlockThreeLabelTwo>14.04 M</BlockThreeLabelTwo>
            </BlockThreeContainerOne>
            <BlockThreeContainerTwo>
              <BlockThreeLabelThree>Avg Vol</BlockThreeLabelThree>
              <BlockThreeLabelFour>2.49 M</BlockThreeLabelFour>
            </BlockThreeContainerTwo>
            <BlockThreeContainerThree>
              <BlockThreeLabelFive>Mkt Cap</BlockThreeLabelFive>
              <BlockThreeLabelSix>2.79 B</BlockThreeLabelSix>
            </BlockThreeContainerThree>
          </BlockThree>
        </FifthContainer>
       
        <SixthContainer>
            <TitleText>Track this stock</TitleText>
            <Subtext>Get the latest quotes in your <StyledLink href="">watchlist</StyledLink> and receive email and browser notifications</Subtext>
            <ButtonSeven><StyledLinkTwo><FontAwesomeIcon icon={faStar} /></StyledLinkTwo> Follow</ButtonSeven>
        </SixthContainer>
      </Wrapper>
  );
};
// Exporting the created YearGraph JSX Element
export default YearGraph;