import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

interface TokenStore {
  token: string | null;
  updateToken: (newToken: string | null) => void;
}

const AuthContext = createContext<TokenStore | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState(localStorage.getItem('custTokenDevision'));

  const updateToken = (newToken: string | null) => {
    setToken(newToken);
  };

  const contextValue = useMemo(
    () => ({
      token,
      updateToken,
    }),
    [token],
  );

  useEffect(() => {
    if (token) {
      localStorage.setItem('custTokenDevision', token);
    } else {
      localStorage.removeItem('custTokenDevision');
    }
  }, [token]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}
