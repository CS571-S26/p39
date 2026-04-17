import { Card, Row, Col, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import '../App.css'
import BioCard from '../components/BioCard';

function ArtistBiosPage() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const storedArtists = JSON.parse(localStorage.getItem('artistSubmissions')) || [];
        setArtists(storedArtists);
    }, []);

  return (
    <Container>
      <h1>Artist Bios</h1>
      <p>Learn more about featured artists and their work</p>
      <Row>
      {artists.length === 0 ? (
          <p>No artists submitted yet.</p>
        ) : (
            artists.map(artist => (<Col key={artist.id} sm={12} md={6} lg={4}>
            <BioCard key={artist.id} artist={artist} />
            </Col>
          ))
        )}
    </Row>
    </Container>
  )
}
export default ArtistBiosPage;
