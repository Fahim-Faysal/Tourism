import React, { createContext } from 'react';
import useFireabse from '../../hooks/useFireabse';


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
      const allcontext = useFireabse()
      return (
            <AuthContext.Provider value={allcontext}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;