import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ArtWork.css';

function ArtWork({ title, image, description, author }) {

    const [showMore, setMore] = useState(false);
    const [added, setAdded] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);

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
              <Card.Title>{title}</Card.Title>
              <Button onClick={more}>{showMore ? "Hide": "See More"}</Button>
              {showMore && <Card.Text>{description}</Card.Text>}
              {showMore && <Card.Text><em>Artist: {author}</em></Card.Text>}
              <p>{added ? "Added to My Gallery" : ""}</p>
              <Button>Add</Button>
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
