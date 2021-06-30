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
      </Wrapper>
  );
};
// Exporting the created YearGraph JSX Element
export default YearGraph;