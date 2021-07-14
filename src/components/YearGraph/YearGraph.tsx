// Written by Joey Essak-
// Imported CSS
import "./YearGraph.styles.css";
// Imported Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons'



// Creating a YearGraph JSX Element 
const YearGraph = ( ): JSX.Element => {
  return (
   <div className="wrapper">
      <div className="container-1">
        Container 1
          <label>19.00</label>
          <FontAwesomeIcon icon={faCaretUp}/>   
          <label>0.10</label>
          <label>(0.53%)</label>
      </div>
      <div className="container-2">
        Container 2
      </div>
      <div className="container-3">
        Container 3
      </div>
      <div className="container-4">
        Container 4
      </div>
      <div className="container-5">
        Container5
          <div className="column-1">
            Column One
          </div>
          <div className="column-2">
            Column Two
          </div>
          <div className="column-3">
            Column Three
          </div>
      </div>
      <div className="container-6">
        Conatiner 6
      </div>
   </div> 
  );
};
// Exporting the created YearGraph JSX Element
export default YearGraph;