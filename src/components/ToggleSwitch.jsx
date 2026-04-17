import { Card, Form } from 'react-bootstrap';

function ToggleSwitch(props) {
    return (
        <Form.Check
            type="switch"
            label={props.label || ""}
            checked={props.checked}
            onChange={props.onChange}
        />
    );
}

export default ToggleSwitch;