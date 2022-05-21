import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal
        show={this.props.isModalDisplaying}
        onHide={this.props.closeModalHandler}
      >
        <img
          src={this.props.selectedBeast.img}
          alt={this.props.selectedBeast.name} />

        <Modal.Body>
          <Modal.Title>
            {this.props.selectedBeast.name}
          </Modal.Title>

          <p>{this.props.selectedBeast.description}</p>
        </Modal.Body>

      </Modal>
    )
  }
}

export default SelectedBeast;