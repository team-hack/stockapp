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




export const Label =  styled.label<{ myLabel: string }>`

color: green;


${props => props.myLabel == "test" && css `background: palevioletred;
    color: red;`   
  }


${props => props.myLabel == "test2" && css `background: palevioletred;
    color: blue;`   
  }  


font-size: 40px;
`