import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ArtWork.css';

function ArtWork({ title, image, description, author, id }) {

    const [showMore, setMore] = useState(false);
    const [added, setAdded] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [refresh, setRefresh] = useState(false)

    function more(){
       setMore(e => !e);
    }

    const handleImageClick = () => {
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const handleAddToGallery = (artwork) => {
        const existing = JSON.parse(localStorage.getItem('myGallery')) || []
        if (existing.some(item => item.id === artwork.id)) return
        const updated = [...existing, artwork]
        localStorage.setItem('myGallery', JSON.stringify(updated))
         setRefresh(prev => !prev)
    }

    const isAlreadyAdded = (id) => {
        const existing = JSON.parse(localStorage.getItem('myGallery')) || []
        return existing.some(item => item.id === id)
    }

    const handleRemoveFromGallery = (id) => {
        const existing = JSON.parse(localStorage.getItem('myGallery')) || []
        const updated = existing.filter(item => item.id !== id)
        localStorage.setItem('myGallery', JSON.stringify(updated))
        setRefresh(prev => !prev)
    }


  return (
    <>
      <Card className="artwork-card" style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            onClick={handleImageClick}
            style={{cursor: 'zoom-in', height: '200px', objectFit: 'cover' }}
          />
          <Card.Body>
              <Card.Title className='title'> {title} </Card.Title>
            <Button  className="btn-primary"  variant='secondary' onClick={more}>{showMore ? "Hide": "See More"}</Button>
              {showMore && <Card.Text>{description}</Card.Text>}
              {showMore && <Card.Text><em>Artist: {author}</em></Card.Text>}
              <p></p>
            {isAlreadyAdded(id) ? (
            <Button className="btn-primary" variant='danger' onClick={() => handleRemoveFromGallery(id)}>Remove from Gallery</Button>) : (
            <Button className="btn-primary" variant='secondary' onClick={() => handleAddToGallery({id, title, image, description, author})}>
            Add to Gallery</Button>)}   
          </Card.Body>
      </Card>

      {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <button className="close-button" onClick={handleCloseModal}>&times;</button>
                    <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        <img 
                            src={image} 
                            alt={title} 
                            className="navigable-image" 
                        />
                    </div>
                </div>
            )}
    </>
  );
}

export default ArtWork;
