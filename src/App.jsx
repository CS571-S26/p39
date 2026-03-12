import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
