import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeProvider from './components/ThemeProvider.tsx'
import App from './App.tsx'
import JokeComponent from './components/joke.tsx'
import Timer from './components/Timer.tsx'
import Counter from './components/counter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <JokeComponent />
      <Timer />
      <Counter />
    </ThemeProvider>
  </StrictMode>,
)
