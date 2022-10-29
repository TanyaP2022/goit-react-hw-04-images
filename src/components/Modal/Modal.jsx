import { Component } from 'react';
import { createPortal } from "react-dom";
import { ModalStyled } from './ModalStyled'

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }
  closeModal = (event) => {
    if (event.code === "Escape" || event.currentTarget === event.target) {
              console.log('Escape', event.code)
      this.props.onClose();
    }
  }
  render() {
    const {largeImageURL, tags } = this.props.content;
    return createPortal(
      <ModalStyled className="overlay" onClick={this.closeModal}>
        <div className="modal">
          <img className="modalImg" src={largeImageURL} alt={tags} />
        </div>
      </ModalStyled>,
      modalRoot,
      )
  }
}
