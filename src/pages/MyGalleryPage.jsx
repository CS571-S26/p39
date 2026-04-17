import { Card, Button, Form} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import '../App.css'
import GalleryCard from '../components/GalleryCard'
import LayoutOptions from '../components/LayoutOptions'
import ToggleSwitch from '../components/ToggleSwitch'

function MyGalleryPage() {
    const [artworks, setArtworks] = useState([])
    const [layout, setLayout] = useState('grid')
    const [columns, setColumns] = useState(3)
    const [isEditing, setIsEditing] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('myGallery')) || []
        setArtworks(saved)
    }, []);

    useEffect(() => {
      if (isDarkMode) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-bs-theme', 'light');
      }
    }, [isDarkMode]);

    useEffect(() => {
        const handleFocus = () => loadGallery()
        window.addEventListener('focus', handleFocus)
        return () => window.removeEventListener('focus', handleFocus)
    }, [])

    const handleDragEnd = (result) => {
    if (!result.destination) return

    const reordered = Array.from(artworks)
    const [removed] = reordered.splice(result.source.index, 1)
    reordered.splice(result.destination.index, 0, removed)

    setArtworks(reordered)
    localStorage.setItem('myGallery', JSON.stringify(reordered))
  }

  const handleRemove = (id) => {
    const updated = artworks.filter((art) => art.id !== id)
    setArtworks(updated)
    localStorage.setItem('myGallery', JSON.stringify(updated))
  }

  return (
 <div className="p-4">
      <h1>My Gallery</h1>
      <p>Create and customize your own art gallery experience</p>

    <Card style={{margin: "10px"}}>
      <h5>Visual Options</h5>
      <div style={{display: "flex"}}>
        <p style={{textAlign: "left", fontSize: "16px", paddingRight:"5px"}}>Edit Mode:</p>
        <ToggleSwitch  checked={isEditing} onChange={() => setIsEditing(!isEditing)} />
      </div>
      <div style={{display: "flex"}}>
        <p style={{textAlign: "left", fontSize: "16px", paddingRight:"5px"}}>Dark Mode:</p>
        <ToggleSwitch checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)}/>
      </div>
      </Card>

    {isEditing && (
        <LayoutOptions columns={columns} layout={layout} setColumns={setColumns} setLayout={setLayout}></LayoutOptions>
    )}
    <div className={isEditing ? 'editing-mode' : ''}>
      <div>
        <h3>My Selected Artworks</h3>

        {artworks.length === 0 ? (
          <p>No artworks added yet.</p>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable
              droppableId="gallery"
              direction={layout === 'grid' ? 'horizontal' : 'vertical'}
            >
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={{
                    display: 'grid',
                    gridTemplateColumns:
                        layout === 'grid'
                        ? `repeat(${columns}, minmax(200px, 1fr))`
                        : '1fr',
                    gap: '20px'
                    }}
                >
                  {artworks.map((art, index) => (
                    <GalleryCard handleRemove={handleRemove} art={art} index={index} key={index}></GalleryCard>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </div>
    </div>
  )
}
export default MyGalleryPage;
