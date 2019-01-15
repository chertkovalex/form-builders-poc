import React from 'react';
import { Col, ControlLabel, FormControl, FormGroup, HelpBlock, InputGroup, Row } from 'react-bootstrap';

class ImperialBodyParam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.formData };
  }

  onChange(name) {
    return event => {
      this.setState(
        {
          [name]: parseFloat(event.target.value)
        },
        () => this.props.onChange(this.state)
      );
    };
  }
  render() {
    const { schema, idSchema, help } = this.props;
    const { title, properties } = schema;
    const keys = Object.keys(properties);

    return (
      <FormGroup controlId={idSchema.$id}>
        <ControlLabel>{title}</ControlLabel>
        <Row>
          {keys.map(key => (
            <Col xs={6} sm={5} md={5} lg={5} key={key}>
              <InputGroup>
                <FormControl type="number" step="0.01" value={this.state[key]} onChange={this.onChange(key)} />
                {properties[key].suffix && <InputGroup.Addon>{properties[key].suffix}</InputGroup.Addon>}
              </InputGroup>
            </Col>
          ))}
        </Row>
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
    );
  }
}

export default ImperialBodyParam;
