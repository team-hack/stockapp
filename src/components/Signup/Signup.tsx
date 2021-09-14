import React, { 
  ChangeEvent, 
  FormEvent, 
  useState 
} from "react";

import { useAuth } from "../../context/AuthProvider";
import type User from "../../types/User";
import "./Signup.css";
import { useHistory } from "react-router-dom";

const Signup: React.FC = () => {
  const formState: User = {
    email: '',
    password: ''
  };

  const [form, setForm] = useState(formState);
  const auth = useAuth();
  const history = useHistory();

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
    auth.signup( form );
    history.push("/");
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
