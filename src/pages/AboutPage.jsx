import { Card } from 'react-bootstrap'
import '../App.css'

function AboutPage() {
  return (
    <div className="p-4">
      <Card className="p-4" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Card.Body>
          <h1>About Digital Art Gallery</h1>
          
          <div className="mt-4">
            <h3>Our Mission</h3>
            <p>
              To create an interactive art experience that enables users to explore artworks 
              from a variety of artists while personalizing their own viewing experience.
            </p>
          </div>

          <div className="mt-4">
            <h3>Features</h3>
            <ul>
              <li><strong>Virtual Gallery</strong> - Hover over artworks to zoom in and explore details</li>
              <li><strong>Artist Bios</strong> - Learn about featured artists and their creative processes</li>
              <li><strong>Custom Gallery Builder</strong> - Create your own gallery with personalized layouts</li>
              <li><strong>Artist Submissions</strong> - Suggest new artists to feature</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3>Get Started</h3>
            <p>
              Browse our collection in the Gallery, learn about artists, or create your own personalized 
              viewing experience. Happy exploring!
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
export default AboutPage;
