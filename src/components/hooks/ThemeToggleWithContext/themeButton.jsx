import { useContext } from "react"
import ThemeContext from "./themeToggle"
import "./themeStyle.css"


const ThemeButton = () => {

    const {isDark, handleChange} = useContext(ThemeContext)

    return(
        <div className={`${isDark ? 'dark' : 'light'}`} style={{height:'100vh', width:'100vw'}}>

        <button onClick={handleChange}>Toggle to {isDark ? 'Light' : 'Dark'} theme</button>
        </div>
    )
}

export default ThemeButton