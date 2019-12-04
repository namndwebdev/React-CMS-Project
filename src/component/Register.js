import React from "react";
import Form from './Modal'
import Modal from "react-responsive-modal";

class App extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Register</button>
        <Modal open={open} onClose={this.onCloseModal}>
         <Form/>
        </Modal>
      </div>
    );
  }
}
export default App