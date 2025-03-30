import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [isDark, setIsDark] = useState(false);
    const handleChange = () => {
        setIsDark((prev) => !prev);
    }


return(
    <ThemeContext.Provider value={{isDark, handleChange}}>
        {children}
    </ThemeContext.Provider>
)
}
export default ThemeContext;