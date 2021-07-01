// Written by Joey Essak-
// Importorting styled-comonents 
import styled from "styled-components";

// Wrapper that goes around the First and Second Container
export const Wrapper = styled.div`
background-color: rgb(240, 239, 239);
padding-left:50px;
padding-right: 50px;
padding-bottom: 40px;
margin-top: 50px;
//height: 100vh;
margin-left: 60px;
margin-right: 60px;
padding-top: 40px;
border-radius: 10px;
border-color: rgb(255, 0, 0);
border-style: solid;
`

// First Container aka Main Container
export const MainContainer = styled.div`
padding-left: 10px;
padding-top: 10px;
padding-bottom: 10px;
background-color: white;
display: flex;   
align-items: flex-end;
`
// First Container- Label 1:
export const LabelOne = styled.label`
background-color: beige;
margin-right: 10px;
font-size:40px;
font-weight: 700;
`
// First Container- Label 2:
export const LabelTwo = styled.label`
background-color: beige;
margin-right: 10px;
`
// First Container- Label 3:
export const LabelThree = styled.label`
background-color: beige;
font-size: 30px;
font-weight: 700;
color: green;
margin-right: 10px;
`// -End- First Container-->


// Second Container 
export const SecondContainer = styled.div`
padding-left: 10px;
background-color: white;
display: flex;
flex-direction: row;
`
// Second Container- Label 4:
export const LabelFour = styled.label`
background-color: beige;
margin-right: 10px;
color: grey;
font-size: 25px;
font-weight: 700;
align-items:center;
`
// Second Container- Label 5:
export const LabelFive = styled.label`
background-color: beige;
margin-right: 10px;
align-items:center;
`
// Second Container- Label 6:
export const LabelSix = styled.label`
background-color: beige;
margin-right: 10px;
font-size: 25px;
font-weight: 700;
color: green;
align-items:center;
`
// Second Container- Label 7:
export const LabelSeven = styled.label`
background-color: beige;
color: grey;
font-size: 20px;
font-weight: 700;
align-items:center;
`// -End- Second Container-->  
 

// Third Container 
export const ThirdContainer = styled.div`
padding-left: 10px;
background-color: white;
display: flex;
flex-direction: row;
padding-top: 10px;
padding-bottom: 10px;
align-self: flex-start;
`
// Third Container- Button 1:
export const ButtonOne = styled.button`
margin-right: 20px;
width: 150px;
height: 40px;
border-radius: 40px;
color: blue;
`
// Third Container- Button 2:
export const ButtonTwo = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 40px;
color: blue;
`
// Third Container- Button 3:
export const ButtonThree = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 40px;
color: blue;
`
// Third Container- Button 4:
export const ButtonFour = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 40px;
color: blue;
`
// Third Container- Button 5:
export const ButtonFive = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 40px;
color: blue;
`
// Third Container- Button 6:
export const ButtonSix = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 40px;
color: blue;
`// -End- Third Container-->  


// Fourth Container 
export const FourthContainer = styled.div`
padding-left: 10px;
padding-right: 10px;
background-color: white;
display: flex;
flex-direction: row;
padding-top: 10px;
padding-bottom: 10px;
align-items: center;
border-style: solid;
border-color: orange;
`
// Fourth Container- StockChartPlaceholder
export const StockChartPlaceholder = styled.div`
height: 400px;
width: 100vw;
background-color: green;
display: flex;
justify-content: center;
align-items: center;
`
// Fourth Container- PlaceholderMessage
export const PlaceholderMessage = styled.p`
font-size: 20px;
font-weight: bold;
color:white;
padding-left: 10px;
`