import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Form,
  FormGroup,
  Row,
  Col
} from "reactstrap";

class ModalAddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username:'',
      review:''
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
         
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Input
              type="textarea"
              placeholder="Write your Review Here"
              rows={5}
              name="review"
                  value={this.state.review}
                  onChange={this.handleInputChange}

            />

<Input
              
              type="text"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleInputChange}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.clickHandler}>
              Submit
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalAddReview;
