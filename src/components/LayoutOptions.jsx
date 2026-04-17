import { Card, Button, Form} from 'react-bootstrap'


function LayoutOptions(props) {

    return (

        <Card className="p-3 mb-4">
        <Card.Body>
          <Card.Title>Gallery Layout Options</Card.Title>

          <Form.Group
            className="mb-3"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            
            <Form.Label style={{ marginRight: '10px' }}>
              <strong>Layout Style:</strong>
            </Form.Label>
            <Form.Select
              value={props.layout}
              onChange={(e) => props.setLayout(e.target.value)}
              style={{ width: '200px' }}
            >
              <option value="grid">Grid</option>
              <option value="list">List</option>
            </Form.Select>
          </Form.Group>

          {props.layout === 'grid' && (
            <Form.Group style={{ display: 'flex', alignItems: 'center' }}>
              <Form.Label style={{ marginRight: '10px' }}>
                <strong>Number of Columns:</strong>
              </Form.Label>
              <Form.Control
                type="number"
                min={1}
                max={5}
                value={props.columns}
                onChange={(e) => props.setColumns(Number(e.target.value))}
                style={{ width: '80px' }}
              />
            </Form.Group>
          )}
        </Card.Body>
      </Card>
    )

}

export default LayoutOptions;