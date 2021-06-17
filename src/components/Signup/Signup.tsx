import React, { 
  ChangeEvent, 
  FormEvent, 
  useState 
} from "react";

import "./Signup.css";

const Signup = () => {
  const formState = {
    email: '',
    password: ''
  };

  const [form, setForm] = useState(formState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm( prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // prevent page reload
    event.preventDefault()
    // request to server create a new user here
    console.log(form);
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
