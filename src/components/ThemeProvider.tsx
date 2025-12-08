import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = { theme: Theme; setTheme: (t: Theme) => void }

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider