const { createContext, useEffect, useState } = require("react");

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(false)
    const login = () => {
        if(localStorage.getItem("authToken")){
            setUser(true)
        }
        else{
            setUser(false)
        }
    }
    const logout = () => {
        localStorage.removeItem("authToken")
        setUser(false)
    }
    useEffect(() => {
        if(localStorage.getItem("authToken")){
            setUser(true)
        }
        else{
            setUser(false)
        }
        // setUser()        
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider