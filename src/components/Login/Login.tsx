import React, {
  ChangeEvent,
  FormEvent,
  useState
} from "react";

import { useAuth } from "../../context/AuthProvider";
import type User from "../../types/User";
import './Login.css'

import {
  LoginForm,
  LoginBtn,
  LoginInput
} from './LoginStyled'

const Login: React.FC = () => {
  const formState: User = {
    email: '',
    password: ''
  };

  const [form, setForm] = useState(formState);
  const auth = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm( prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth.login( form );
  };

  return (
    <main className="login-page">
      <aside className="side-image">some content goes here</aside>
      <section className="login-section">
        <h1>Login</h1>
        <div className="login-container">
          <LoginForm onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label> 
            <LoginInput id="email" type="email" name="email" onChange={handleChange}/>
            <label htmlFor="password">Password</label>
            <LoginInput id="password" name="password" type="password" onChange={handleChange}/>
            <LoginBtn type="submit">Login</LoginBtn>
          </LoginForm>
        </div>
      </section>
    </main>
  );
};

export default Login;
