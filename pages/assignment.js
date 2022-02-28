import React, { Component } from 'react';
import AccordionTest from '../components/accordionTest';
import Alerttest from '../components/alerttest';
import CarouselTest from '../components/carousel';
import { Modal, Button, Tooltip, Col, Form } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip';

class assignment extends Component {
  constructor(){
    super();
    this.state = {
      show: false,
      field: []
    }
  }

  handleShow = () => {
    this.setState({show: true})
  }

  handleClose = () => {
    this.setState({show: false})
  }

  setField = (e) => {
    let field = this.state.field
    field.push(e.target.value)
    this.setState({field: field})//e.target.selectedOptions})
  }

  render() {
    const { show, field } = this.state
    console.log(field)
    return (
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
          <Alerttest />
        </div>
        <br/>
        <div>
          <AccordionTest />
        </div>
        <br/>
        <div>
          <CarouselTest />
        </div>
        <br/>
        <div>
          {/* Modal */}
          <ReactTooltip id = {"testId"} place="top" effect="solid">
            Testing Tooltip
          </ReactTooltip>
          <Button data-tip data-for={"testId"} variant="primary" onClick={() => this.handleShow()}>
              Launch demo modal
            </Button>

          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose()}>
                Close
              </Button>
              <Button variant="primary" onClick={() => this.handleClose()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <br/>
        <div>
        <Form.Group as={Col} controlId="my_multiselect_field">
          <Form.Label>My multiselect</Form.Label>
          <Form.Control as="select" multiple value={field} onChange={e => this.setField(e)}>
            <option value="field1">Field 1</option>
            <option value="field2">Field 2</option>
            <option value="field3">Field 3</option>
          </Form.Control>
        </Form.Group>
        </div>
        <br/>
      </div>
    );
  }
}

export default assignment;