import React from 'react';
import styled from "styled-components";

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
`;

export const LoginBtn = styled.button`
  width: 10em;
  border: none;
  background: #c4c4c4;
  padding: 0.5em 0.5em;
  cursor: pointer;
  &:hover {
    background: #444444;
    color: white;
    font-weight: bold;
  }
`;

export const LoginInput = styled.input`
  border-radius: 0;
  border: 1px solid black;
  padding: 0.5em;
`;

