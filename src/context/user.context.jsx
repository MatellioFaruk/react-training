import { createContext } from "react";

export const UserContext = createContext({
    contextUser: {
        first_name: "Faruk",
        last_name: "Khan"
    }
});

export default function UserProvider({ children }) {
    return (
        <UserContext.Provider value={{
            contextUser: {
                first_name: "Faruk",
                last_name: "Khan"
            }
        }}>
            {children}
        </UserContext.Provider>
    )
}

