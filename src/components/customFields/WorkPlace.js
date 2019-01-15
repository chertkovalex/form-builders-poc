import React from 'react';
import { Checkbox, Col, ControlLabel, FormControl, FormGroup, InputGroup } from 'react-bootstrap';
import FieldGroup from './FieldGroup';

class WorkPlace extends React.Component {
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
    const { jobName, weekPercentage, annualIncome, selfEmployed } = this.state;
    const { schema } = this.props;
    const schemaProps = schema.properties;

    return (
      <div>
        <Col xs={3} sm={3} md={3} lg={3}>
          <FieldGroup
            type="text"
            label={schemaProps.jobName.title}
            placeholder="Enter text"
            value={jobName}
            onChange={this.onChange('jobName')}
          />
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <FormGroup>
            <ControlLabel>{schemaProps.weekPercentage.title}</ControlLabel>
            <InputGroup>
              <FormControl
                type="number"
                step="0.01"
                value={weekPercentage}
                onChange={this.onChange('weekPercentage')}
                placeholder="Enter text"
              />
              <InputGroup.Addon>%</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <FormGroup>
            <ControlLabel>{schemaProps.annualIncome.title}</ControlLabel>
            <InputGroup>
              <FormControl type="number" step="0.01" value={annualIncome} onChange={this.onChange('annualIncome')} />
              <InputGroup.Addon>£</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col xs={2} sm={2} md={2} lg={2}>
          <FormGroup>
            <ControlLabel>
              {schemaProps.selfEmployed.title}
              <Checkbox checked={selfEmployed} onChange={this.onChange('selfEmployed')} />
            </ControlLabel>
          </FormGroup>
        </Col>
      </div>
    );
  }
}

export default WorkPlace;
