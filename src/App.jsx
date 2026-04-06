import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import GalleryPage from './pages/GalleryPage.jsx'
import ArtistBiosPage from './pages/ArtistBiosPage.jsx'
import ArtistSubmissionPage from './pages/ArtistSubmissionPage.jsx'
import MyGalleryPage from './pages/MyGalleryPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GalleryPage />} />
          <Route path="artist-bios" element={<ArtistBiosPage />} />
          <Route path="submission" element={<ArtistSubmissionPage />} />
          <Route path="my-gallery" element={<MyGalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    
  )
}

export default App
