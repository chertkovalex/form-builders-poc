import React from 'react';
import WorkPlace from './WorkPlace';
import { Row, Col, Glyphicon, Button } from 'react-bootstrap';

const WorkPlacesTemplate = props => {
  return (
    <div className={props.className}>
      {props.items &&
        props.items.map(element => (
          <Row key={element.index}>
            <WorkPlace {...element.children.props} />
            <Col xs={2} sm={2} md={2} lg={2}>
              {/*          {element.hasMoveDown && (
            <button onClick={element.onReorderClick(element.index, element.index + 1)}>Down</button>
          )}
          {element.hasMoveUp && (
            <button onClick={element.onReorderClick(element.index, element.index - 1)}>Up</button>
          )}*/}
              <Button bsStyle="link" bsSize="large" onClick={element.onDropIndexClick(element.index)}>
                <Glyphicon glyph="trash" />
              </Button>
            </Col>
          </Row>
        ))}

      {props.canAdd && (
        <Row>
          <Col xs={2} xsOffset={9}>

            <Button bsStyle="link" bsSize="large" onClick={props.onAddClick} type="button">
              <Glyphicon glyph="plus" />
            </Button>

{/*
          <p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
          </p>
*/}
          </Col>
        </Row>
      )}
    </div>
  );
};

export default WorkPlacesTemplate;
