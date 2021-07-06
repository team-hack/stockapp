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
font-size:24px;
font-weight: 700;
@media only screen and (max-width: 1041px) {
    font-size:18px;
     }
`
// First Container- Label 2:
export const LabelTwo = styled.label`
background-color: beige;
margin-right: 10px;
font-size:24px;
@media only screen and (max-width: 1041px) {
    font-size:18px;
     }
`
// First Container- Label 3:
export const LabelThree = styled.label`
background-color: beige;
font-size:24px;
font-weight: 700;
color: green;
margin-right: 10px;
@media only screen and (max-width: 1041px) {
    font-size:18px;
  
     }
`// -End- First Container-->

// Second Container 
export const SecondContainer = styled.div`
padding-left: 10px;
background-color: white;
display: flex;   
align-items: flex-end;
`
// Second Container- Label 4:
export const LabelFour = styled.label`
background-color: beige;
margin-right: 10px;
color: grey;
font-size:24px;
font-weight: 700;
align-items: center;
@media only screen and (max-width: 1041px) {
    display: none !important;
     }
`
// Second Container- Label 5:
export const LabelFive = styled.label`
background-color: beige;
margin-right: 10px;
align-items:center;
font-size:24px;
@media only screen and (max-width: 1041px) {
    display: none !important;
     }
`
// Second Container- Label 6:
export const LabelSix = styled.label`
background-color: beige;
margin-right: 10px;
font-size:24px;
font-weight: 700;
color: green;
align-items:center;
@media only screen and (max-width: 1041px) {
    
    display: none !important;
     }
`
// Second Container- Label 7:
export const LabelSeven = styled.label`
background-color: beige;
color: grey;
font-size:24px;
font-weight: 700;
align-items:center;
@media only screen and (max-width: 1041px) {
    font-size:18px;
     }
`// -End- Second Container-->  
 
// Third Container 
export const ThirdContainer = styled.div`
background-color: white;
display: flex;
flex-direction: row;

padding-top: 10px;
padding-left: 10px;
padding-bottom: 10px;
`
// Third Container- Button 1:
export const ButtonOne = styled.button`
width: 150px;
height: 40px;
margin-right: 20px;
border-radius: 10px;
color: blue;
@media only screen and (max-width: 1041px) {
    display: none !important;
     }
`
// Third Container- Button 2:
export const ButtonTwo = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 10px;
color: blue;
@media only screen and (max-width: 1041px) {
    display: none !important;
     }
`
// Third Container- Button 3:
export const ButtonThree = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 10px;
color: blue;
@media only screen and (max-width: 1041px) {
    display: none !important;
     }
`
// Third Container- Button 4:
export const ButtonFour = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 10px;
color: blue;
@media only screen and (max-width: 1041px) {
    display: none !important;
     }
`
// Third Container- Button 5:
export const ButtonFive = styled.button`
margin-right: 20px;
width: 150px;
border-radius: 10px;
color: blue;
@media only screen and (max-width: 1041px) {
    display: none !important;
     }
`
// Third Container- Button 6:
export const ButtonSix = styled.button`
width: 150px;
border-radius: 10px;
color: blue;
@media only screen and (max-width: 1041px) {
    display: none !important;
     }
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
`// -End- Fourth Container-->  

// Fifth Container 
export const FifthContainer = styled.div`
padding-left: 10px;
padding-right: 10px;
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding-top: 10px;
padding-bottom: 10px;
align-items: center;
border-style: solid;
border-color: #00fffb;
@media only screen and (max-width: 1041px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    justify-self: stretch;
     }
`
// Fifth Container- BlockOne
export const BlockOne = styled.div`
justify-self: stretch;
height: 200px;
background-color: red;
@media only screen and (max-width: 1041px) {


     }
`
// Fourth Container- BlockOneMessage
export const BlockOneMessage = styled.p`
font-size: 20px;
font-weight: bold;
color:white;
padding-left: 10px;
`
// Fifth Container- BlockTwo
export const BlockTwo = styled.div`
justify-self: stretch;
height: 200px;
background-color:green;
@media only screen and (max-width: 1041px) {
    
     }
`
// Fourth Container- BlockTwoMessage
export const BlockTwoMessage = styled.p`
font-size: 20px;
font-weight: bold;
color:white;
padding-left: 10px;
`
// Fifth Container- BlockThree
export const BlockThree = styled.div`
justify-self: stretch;
height: 200px;
background-color: blue;
@media only screen and (max-width: 1041px) {
     
       
     }
`
// Fourth Container- BlockThreeMessage
export const BlockThreeMessage = styled.p`
font-size: 20px;
font-weight: bold;
color:white;
padding-left: 10px;
`
// Sixth Container 
export const SixthContainer = styled.div`
padding-left: 10px;
padding-right: 10px;
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: auto;
// Defining: grid template- for objects
grid-template-areas: 
    "label-Title label-Title button"
    "label-Subtext label-Subtext button";
// -End- grid template-->  
padding-top: 10px;
padding-bottom: 10px;
align-items: center;
border-style: solid;
border-color: #1900ff;
`
// Sixth Container- TitleText
export const TitleText = styled.label`
grid-area: label-Title;
font-size: 20px;
font-weight: bold;
color:black;
padding-left: 10px;
`
// Sixth Container- SubText 
export const Subtext = styled.label`
grid-area: label-Subtext;
font-size: 15px;
color:black;
padding-left: 10px;
`
// Sixth Container- Button 7:
export const ButtonSeven = styled.button`
grid-area:button;
justify-self: end;
margin-right: 20px;
width: 150px;
height: 40px;
border-radius: 10px;
color: blue;
`