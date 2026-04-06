import { Card } from 'react-bootstrap'
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
    <div className="p-4">
      <h1>Artist Bios</h1>
      <p>Learn more about featured artists and their work</p>
      {artists.length === 0 ? (
          <p>No artists submitted yet.</p>
        ) : (
          artists.map(artist => (
            <BioCard key={artist.id} artist={artist} />
          ))
        )}
    </div>
  )
}
export default ArtistBiosPage;
