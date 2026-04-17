import { useEffect, useState } from 'react';
import ArtWork from '../components/ArtWork';
import GalleryFilter from '../components/SearchBar';
import { Container, Row, Col } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';

function GalleryPage() {
  const [artworks, setArtworks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
const mockArtworks = [
  {
    id: 1,
    title: 'American Gothic',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/American-Gothic.jpg?raw=true',
    description: 'A painting of a farmer and his daughter, iconic of rural American life.',
    author: 'Grant Wood'
  },
  {
    id: 2,
    title: 'Marilyn Monroe',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/AndyWarhol.webp?raw=true',
    description: 'A colorful pop art screen print of the famous actress.',
    author: 'Andy Warhol'
  },
  {
    id: 3,
    title: 'Impression, Sunrise',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Claude_Monet.jpg?raw=true',
    description: 'The painting that gave the Impressionist movement its name.',
    author: 'Claude Monet'
  },
  {
    id: 4,
    title: 'The Ballet Class',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Degas_Ballet.webp?raw=true',
    description: 'A depiction of dancers at the Paris Opéra.',
    author: 'Edgar Degas'
  },
  {
    id: 5,
    title: 'Girl with a Pearl Earring',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Earring_Girl.jpg?raw=true',
    description: 'A world-famous Dutch Golden Age portrait.',
    author: 'Johannes Vermeer'
  },
  {
    id: 6,
    title: 'The Rehearsal',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Edgar%20Degas%203520.jpg?raw=true',
    description: 'A study of dancers practicing their craft.',
    author: 'Edgar Degas'
  },
  {
    id: 7,
    title: 'A Bar at the Folies-Bergère',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Edouard_Manet.webp?raw=true',
    description: 'A major work depicting a scene in a Paris nightclub.',
    author: 'Édouard Manet'
  },
  {
    id: 8,
    title: 'The Rape of Europa',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Europa.jpg?raw=true',
    description: 'A dramatic mythological scene from the Renaissance.',
    author: 'Titian'
  },
  {
    id: 9,
    title: 'The Two Fridas',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Frida_Kahlo.jpeg?raw=true',
    description: 'A double self-portrait expressing the artist’s dual heritage.',
    author: 'Frida Kahlo'
  },
  {
    id: 10,
    title: 'Breezing Up',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Homer_Wind.webp?raw=true',
    description: 'An iconic oil painting of a catboat sailing in the wind.',
    author: 'Winslow Homer'
  },
  {
    id: 11,
    title: 'Portrait of Madame X',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/John_Sargent.webp?raw=true',
    description: 'A scandalous portrait of a socialite in a black dress.',
    author: 'John Singer Sargent'
  },
  {
    id: 12,
    title: 'The Lady of Shalott',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Lady_of_Shalott.webp?raw=true',
    description: 'Based on the poem by Alfred, Lord Tennyson.',
    author: 'John William Waterhouse'
  },
  {
    id: 13,
    title: 'Mona Lisa',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Mona-Lisa.webp?raw=true',
    description: 'The famous portrait by Leonardo da Vinci.',
    author: 'Leonardo da Vinci'
  },
  {
    id: 14,
    title: 'The Great Wave off Kanagawa',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/OceanWave.webp?raw=true',
    description: 'A woodblock print and one of the most recognizable works of Japanese art.',
    author: 'Katsushika Hokusai'
  },
  {
    id: 15,
    title: 'Psyche Revived by Cupid’s Kiss',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Pysche.webp?raw=true',
    description: 'A masterpiece of Neoclassical sculpture.',
    author: 'Antonio Canova'
  },
  {
    id: 16,
    title: 'Skull of a Skeleton with Burning Cigarette',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Skull.webp?raw=true',
    description: 'A humorous yet dark early work from Van Gogh.',
    author: 'Vincent van Gogh'
  },
  {
    id: 17,
    title: 'Stacks of Wheat',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Stacks_of_Wheat.webp?raw=true',
    description: 'Part of a thematic series of Impressionist paintings.',
    author: 'Claude Monet'
  },
  {
    id: 18,
    title: 'Starry Night',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Starry-Night.webp?raw=true',
    description: 'A masterpiece by Van Gogh.',
    author: 'Vincent van Gogh'
  },
  {
    id: 19,
    title: 'The Persistence of Memory',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Surrealism.jpg?raw=true',
    description: 'Famous for its melting clocks, a staple of Surrealism.',
    author: 'Salvador Dalí'
  },
  {
    id: 20,
    title: 'The Swing',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Swing.webp?raw=true',
    description: 'An elegant and playful Rococo masterpiece.',
    author: 'Jean-Honoré Fragonard'
  },
  {
    id: 21,
    title: 'The Birth of Venus',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/TheBirthofVenus.jpg?raw=true',
    description: 'Depicts the goddess Venus arriving at the shore after her birth.',
    author: 'Sandro Botticelli'
  },
  {
    id: 22,
    title: 'The Kiss',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/TheKiss.webp?raw=true',
    description: 'A shimmering, gold-leaf oil painting of a couple embracing.',
    author: 'Gustav Klimt'
  },
  {
    id: 23,
    title: 'The Scream',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/TheScream.jpg?raw=true',
    description: 'An iconic work by Edvard Munch.',
    author: 'Edvard Munch'
  },
  {
    id: 24,
    title: 'The Raft of the Medusa',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/Theodore_Gericault.jpeg?raw=true',
    description: 'An over-life-size painting that changed the course of French Romanticism.',
    author: 'Théodore Géricault'
  },
  {
    id: 25,
    title: 'Water Lilies',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/WaterLily.jpg?raw=true',
    description: 'One of the many paintings in the Water Lilies series.',
    author: 'Claude Monet'
  },
  {
    id: 26,
    title: 'The Creation of Adam',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/michelangelo_sistine.webp?raw=true',
    description: 'A fresco painting forming part of the Sistine Chapel ceiling.',
    author: 'Michelangelo'
  },
  {
    id: 27,
    title: 'Napoleon Crossing the Alps',
    image: 'https://github.com/alblaha1/CS571Images/blob/main/napoleon-crossing-the-alps.webp?raw=true',
    description: 'An idealized equestrian portrait of Napoleon Bonaparte.',
    author: 'Jacques-Louis David'
  }
];
    setArtworks(mockArtworks);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredArtworks = artworks.filter(artwork => {
    return (
      artwork.title.toLowerCase().includes(searchQuery) ||
      artwork.description.toLowerCase().includes(searchQuery) ||
      artwork.author.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <Container>
      <h1>Discover Art Your Way</h1>
      <p>Explore and create your own art viewing experience</p>
      <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange}  />
      <h3>Virtual Gallery</h3>
      <Row>
        {filteredArtworks.map(artwork => (
          <Col key={artwork.id} sm={12} md={6} lg={4}>
            <ArtWork id={artwork.id} title={artwork.title} image={artwork.image} description={artwork.description} author={artwork.author} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default GalleryPage;
