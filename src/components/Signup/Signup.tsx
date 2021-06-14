import React, { 
  ChangeEvent, 
  FormEvent, 
  useState 
} from "react";

import "./Signup.css";

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if( event.target.name == "email") {
      setEmail( event.target.value );
    } else {
      setPassword( event.target.value );
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // prevent page reload
    event.preventDefault()
    // request to server create a new user here
  }

  return (
    <main className="signup-page">
      <aside className="side-image">some content goes here</aside>
      <section className="signup">
        <h1>Signup</h1>
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label> 
            <input className="signup-form-input" id="email" type="email" name="email" onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <input className="signup-form-input" id="password" name="password" type="password" onChange={handleChange}/>
            <button className="signup-form-button" type="submit">Signup</button>
          </form>
        </div>
      </section>
    </main>
  )
};

export { Signup };
