import { Form, Button, Card } from 'react-bootstrap'
import '../App.css'
import { useState } from 'react'

function ArtistSubmissionPage() {
  const [formData, setFormData] = useState({
    artistName: '',
    artworkTitle: '',
    description: '',
    email: ''
  })

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('artistSubmissions')) || [];
    const updated = [...existing, formData];
    localStorage.setItem('artistSubmissions', JSON.stringify(updated));
    setFormData({
      artistName: '',
      artworkTitle: '',
      description: '',
      email: ''
    })
    setSubmitted(true);
  }

  return (
    <div className="p-4">
      <Card className="p-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Card.Body>
          <h1>Submit an Artist</h1>
          <p>Suggest a new artist to feature in our gallery</p>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="artistName">Artist Name</Form.Label>
              <Form.Control
                id="artistName"
                type="text"
                name="artistName"
                placeholder="Enter artist name"
                value={formData.artistName}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="artworkTitle">Artwork Title</Form.Label>
              <Form.Control
                id="artworkTitle"
                type="text"
                name="artworkTitle"
                placeholder="Enter artwork title"
                value={formData.artworkTitle}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                id="description"
                as="textarea"
                rows={4}
                name="description"
                placeholder="Tell us about the artist and their work"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="imageUrl">Artwork Image URL</Form.Label>
                <Form.Control
                id="imageUrl"
                type="text"
                name="imageUrl"
                placeholder="Paste image URL"
                value={formData.imageUrl || ''}
                onChange={handleChange}
            />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Submit Artist
            </Button>
          </Form>
        </Card.Body>
      </Card>
     {submitted && <p className="text-success">Artist submitted successfully!</p>}
    </div>
  )
}
export default ArtistSubmissionPage;
