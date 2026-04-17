import { Card } from 'react-bootstrap'
import '../App.css'

function BioCard({ artist }) {
  return (

      <Card>
      <Card.Body>
        <Card.Title>{artist.artistName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {artist.artworkTitle}
        </Card.Subtitle>

        {artist.imageUrl && (
          <Card.Img
            variant="top"
            src={artist.imageUrl}
            alt={`${artist.artworkTitle} by ${artist.artistName}`}
          />
        )}

        <Card.Text>
          {artist.description}
        </Card.Text>

        <Card.Footer>
          <small>Contact: {artist.email}</small>
        </Card.Footer>
      </Card.Body>
    </Card>

  )
}
export default BioCard;