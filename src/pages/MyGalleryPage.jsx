import { Card, Button } from 'react-bootstrap'
import '../App.css'

function MyGalleryPage() {
  return (
    <div className="p-4">
      <h1>My Gallery</h1>
      <p>Create and customize your own art gallery experience</p>
      
      <div className="d-flex flex-wrap gap-3">
        <Card className="p-3" style={{ width: '300px' }}>
          <Card.Body>
            <Card.Title>Gallery Layout Options</Card.Title>
            <Card.Text>
              Choose how you want to display and arrange your selected artworks.
            </Card.Text>
            <Button variant="primary">Customize Layout</Button>
          </Card.Body>
        </Card>

        <Card className="p-3" style={{ width: '300px' }}>
          <Card.Body>
            <Card.Title>Selected Artworks</Card.Title>
            <Card.Text>
              View and manage the artworks you've added to your personal gallery.
            </Card.Text>
            <Button variant="secondary">View My Selections</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
export default MyGalleryPage;
