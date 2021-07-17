// Written by Joey Essak-
// Importorting styled-comonents 
import styled, {css} from "styled-components";
// Ultimate Wrapper this goes around the whole enchilada
export const UltimateWrapper = styled.div`
display: flex;
min-height: 100vh;
flex-direction: column;
background-color:#eceff1;
`




export const Label =  styled.label <{ labelName: string }>`

color: green;


${props => props.labelName == "currentPriceLabel" && css`
     color: #fbb800;
   
   `   
  }


${props => props.labelName == "faIconLabel" && css`
    color: #2121a4;
    
   `   
  }  


${props => props.labelName == "priceDiffernceLabel" && css` 
    color: red;
 
 `
}


${props => props.labelName == "priceDifferncePercentLabel" && css` 
    color: aquamarine;
 
 `
}




font-size: 40px;
`