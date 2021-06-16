import React from 'react';
import reportWebVitals from '../reportWebVitals';
import { Stock } from '../components/Stock';

const HomePage = (): JSX.Element => {
    return (
        <>
          <div>
              <h1>Home Page</h1>
          </div>
          <Stock />
        </>
      );
      
      // If you want to start measuring performance in your app, pass a function
      // to log results (for example: reportWebVitals(console.log))
      // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
      reportWebVitals();
}

export default HomePage