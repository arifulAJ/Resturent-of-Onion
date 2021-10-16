import React, { createContext } from 'react';
import useFireBase from '../Firebase/FireBaseAuth';
export const AuthContext=createContext();
const AuthProvider = ({ children}) => {
    const allContent=useFireBase();
    return (
        <AuthContext.Provider value={allContent}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;