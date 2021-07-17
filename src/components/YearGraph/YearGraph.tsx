// Written by Joey Essak-
// Imported CSS
import "./YearGraph.styles.css";
// Imported Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Label } from "./YearGraphStyled";
import { Button } from "./YearGraphStyled";


// Creating a YearGraph JSX Element 
const YearGraph = ( ): JSX.Element => {
// Container 1   
  const containerOneLabels = [
    {id:1, value: "19.00", labelName:"currentPriceLabel"},
    {id:2, value: <FontAwesomeIcon id="icon" icon={faCaretUp}/> , labelName:"faIconLabel"},
    {id:3, value: " 0.10", labelName:"priceDiffernceLabel" },
    {id:4, value: " (00.53%)", labelName:"priceDifferncePercentLabel"},
  ];

// Container 2


// Container 3 
const containerThreeButtons = [
    {id:5, title: "Day"},
    {id:6, title: "Week"},
    {id:7, title: "Month"},
    {id:8, title: "Year"},
    {id:9, title: "5 Year"},
    {id:10,title: "Max"},
];  
  
  return (
   <div className="wrapper">
      <div className="container-1">
          { containerOneLabels.map((containerOneLabels)=>(
            <Label id={ `${containerOneLabels.id}` } labelName={containerOneLabels.labelName}> {containerOneLabels.value} </Label>))
          }  
      </div>

      <div className="container-2">
         Some more Labels go here
      </div>

      <div className="container-3">
         { containerThreeButtons.map((containerThreeButtons)=>(
            <Button id={ `${containerThreeButtons.id}` }> {containerThreeButtons.title} </Button>))
         }
      </div>
      <div className="container-4">
        3D Chart goes here
      </div>
      <div className="container-5">
          <div className="column-1">
            Column One
            <label> A bunch of labels go here</label>
          </div>
          <div className="column-2">
            Column Two
            <label> A bunch of labels go here</label>
          </div>
          <div className="column-3">
            Column Three
            <label> A bunch of labels go here</label>
          </div>
      </div>
      <div className="container-6">
        labels and a button go here
      </div>
   </div> 
  );
};
// Exporting the created YearGraph JSX Element
export default YearGraph;