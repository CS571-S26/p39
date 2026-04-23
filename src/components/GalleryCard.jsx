import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { Card, Button, Form} from 'react-bootstrap'
import '../App.css'

function GalleryCard(props){
  return (
    <Draggable
      key={props.art.id}
      draggableId={props.art.id.toString()}
      index={props.index}
    >
      {(provided) => (
        <Card
          className="gallery-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style, 
            breakInside: 'avoid',
            marginBottom: '16px'
          }}
        >
          <div className="image-wrapper">
            <Card.Img
              src={props.art.image}
              alt={`${props.art.title} by ${props.art.author}`}
              className="gallery-img"
            />

            <Button
              className="remove-btn"
              onClick={() => props.handleRemove(props.art.id)}
              variant='danger'
            >
              ✕
            </Button>
          </div>
        </Card>
      )}
    </Draggable>
  );
}

export default GalleryCard;