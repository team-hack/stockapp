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
export const Button = styled.button`
width: 90px;
height: 30px;
border-radius: 25px;
margin-right: 20px;
color: #636363;
&:hover {
  background: #009688;
  color: white;
  cursor: pointer;
}
`

export const Label =  styled.label <{ labelName: string }>`
  display: flex;
  font-size: 20px;
  color: grey;
  padding-right:4px;
    ${props => props.labelName == "currentPriceLabel" && css`
        color: black;
        font-size: 2em;
        padding-left:10px;
      `   
      }

    ${props => props.labelName == "faIconLabel" && css`
        align-items: flex-end;
        color: green;
        font-size: 20px;
      `   
      }  

    ${props => props.labelName == "priceDiffernceLabel" && css` 
        color: green;
        font-size: 15px;
    `
    }

    ${props => props.labelName == "priceDifferncePercentLabel" && css` 
        color: green;
        font-size: 15px;
    `
    }
`