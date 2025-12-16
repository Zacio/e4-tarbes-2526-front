import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ThemeProvider from './components/ThemeProvider.tsx'
import App from './App.tsx'
import JokeComponent from './components/Joke.tsx'
import Timer from './components/Timer.tsx'
import Counter from './components/Counter.tsx'
import ThemeToggle from './components/ThemeToggle.tsx'
import NavBar from './components/NavBar.tsx'
import UserCard from './components/BlogCardContainer.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import Formulaire from './components/Formulaire.tsx'
import YathzeeBoard from './components/YathzeeBoard.tsx'
import YathzeeContext from './components/yathzeeComponent/YathzeeContext.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/joke" element={<JokeComponent />} />
          <Route path="/theme" element={<ThemeToggle />} />
          <Route path='/userCard' element={<UserCard />} />
          <Route path='/formulaire' element={<Formulaire />} />
          <Route path='/yathzee' element={<YathzeeContext><YathzeeBoard/></YathzeeContext>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
