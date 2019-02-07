import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Row, Col } from 'reactstrap';

class ModalDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
         <Button color="link" className="text-danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Delete Book</ModalHeader>
          <ModalBody>
            <Row className="text-center">
              <Col xs="12" className="pb-2">
              <i class="fas fa-exclamation-circle fa-5x text-danger animated pulse infinite"></i>
              </Col>
              <Col>
                <p>Are you sure you want to delete this book?</p>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
            <Button color="danger" onClick={this.props.clickHandler}>Delete</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalDelete;