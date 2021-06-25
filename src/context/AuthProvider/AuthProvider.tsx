import React, { createContext, useState, useContext } from 'react';

import User from '../../types/User';

type AuthType = {
  authenticated: boolean;
  token: string | null;
  data: User | undefined | null;
}

type ProvideAuthType = {
  user: AuthType | undefined | null;
  logout: () => void;
  login: ( _ : User ) => void;
  signup: ( _ : User ) => void;
}

const defaultAuth = {
  user: {
    authenticated: false,
    token: '',
    data: null
  },
  login: () => null,
  logout: () => null,
  signup: () => null,
}

const AuthContext = createContext<ProvideAuthType>(defaultAuth);

const useAuth = () : ProvideAuthType => useContext( AuthContext );

function useProvideAuth() : ProvideAuthType {
  const [ user, setUser ] = useState<AuthType>({
    authenticated: false,
    token: '',
    data: null
  });

  const logout = () => {
    setUser({
      authenticated: false,
      token: null,
      data: null
    });
  }

  const login = ( u: User ) => {
    // TODO: login user

    if ( user.authenticated ) {
      return;
    }

    setUser({
      authenticated: true,
      token: 'new token from login',
      data: { ...u }
    });
  }

  const signup = ( u: User ) => {
    // TODO: sign up user 

    // login user, set token, and data
    setUser({
      authenticated: true,
      token: 'my token after signing up',
      data: { ...u }
    });
  }

  return { user, logout, login, signup };
}

const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, useAuth };

