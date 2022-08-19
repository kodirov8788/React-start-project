import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextApi = ({ children }) => {

    const [dataApi, setdataApi] = useState({
        Name: "", LastName: ""
    })

    const ChangeValue = (Name, LastName) => {
        setdataApi({ ...dataApi, Name, LastName })
    }

    const value = {
        name: dataApi?.Name,
        lastname: dataApi?.LastName,
        ChangeValue
    }

    return < UserContext.Provider value={value} > {children}</UserContext.Provider>
}
