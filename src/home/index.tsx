import React from 'react';
import reportWebVitals from '../reportWebVitals';

const HomePage: React.FC = () => {
    return (
        <React.StrictMode>
          <div>
              <p>
                  What is Stock App?
              </p>
              <h2>Tracker</h2>
              [ Import Tracker ]
          </div>
        </React.StrictMode>
      );
      
      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      reportWebVitals();
}

export default HomePage