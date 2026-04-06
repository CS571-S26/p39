import { useEffect, useState } from 'react';
import ArtWork from '../components/ArtWork';
import { Container, Row, Col } from 'react-bootstrap';

function GalleryPage() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const mockArtworks = [
      { id: 1, title: 'Starry Night', 
        image: 'https://github.com/alblaha1/CS571Images/blob/main/Starry-Night.webp?raw=true',
        description: 'A masterpiece by Van Gogh.', 
        author: 'Vincent van Gogh'
    },
      { id: 2, title: 'Mona Lisa', 
        image: 'https://github.com/alblaha1/CS571Images/blob/main/Mona-Lisa.webp?raw=true', 
        description: 'The famous portrait by Leonardo da Vinci.', 
        author: 'Leonardo da Vinci'
      },
      { id: 3, title: 'The Scream', 
        image: 'https://github.com/alblaha1/CS571Images/blob/main/TheScream.jpg?raw=true',
         description: 'An iconic work by Edvard Munch.',
         author: 'Edvard Munch' },
    ];
    setArtworks(mockArtworks);
  }, []);

  return (
    <Container>
      <h1>Discover Art</h1>
      <h1>Your Way</h1>
      <p>Explore and create your own art viewing experience</p>
      <h3>Virtual Gallery</h3>
      <Row>
        {artworks.map(artwork => (
          <Col key={artwork.id} sm={12} md={6} lg={4}>
            <ArtWork title={artwork.title} image={artwork.image} description={artwork.description} author={artwork.author} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GalleryPage;
