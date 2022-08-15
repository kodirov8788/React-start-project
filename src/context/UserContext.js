import { createContext } from "react";

export const UserContext = createContext();



export const UserContextApi = ({ children }) => {

    const value = {
        name: "Axmadjon",
        lastname: "Kodirov"
    }

    return < UserContext.Provider value={value} > {children}</UserContext.Provider>
}
