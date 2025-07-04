import { createContext } from 'react';
import React , { useContext , useState} from 'react' 
import { useNavigate } from 'react-router-dom';   


export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const updateUser = (userData) => {
        setUser(userData);
    };
    const clearUser = () => {
        setUser(null);    
    };
    return (
        <UserContext.Provider value={{ 
        user, 
        updateUser ,
        clearUser,
        }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;