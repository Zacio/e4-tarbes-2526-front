import { useContext, useEffect } from "react"
import { ThemeContext } from "./ThemeProvider"


function ThemeToggle() {
    const ctx = useContext(ThemeContext)
    if (!ctx) {
        throw new Error('ThemeToggle must be used within ThemeProvider')
    }
    const { theme, setTheme } = ctx
    
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(()=>{
        document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
    }, [theme])
    return (
        <button onClick={toggleTheme}>
            Thème: {theme}
        </button>
    )
}

export default ThemeToggle