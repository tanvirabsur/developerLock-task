import React, { createContext } from 'react';

const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const data = {

    }
    return <AuthContext value={data}>
        {children}
    </AuthContext>
};
export { AuthContext }
export default AuthProvider;