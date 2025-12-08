import { useContext } from "react"
import { ThemeContext } from "./ThemeProvider"


export function ThemeToggle() {
    const ctx = useContext(ThemeContext)
    if (!ctx) {
        throw new Error('ThemeToggle must be used within ThemeProvider')
    }
    const { theme, setTheme } = ctx
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <button onClick={toggleTheme}>
            Thème: {theme}
        </button>
    )
}

