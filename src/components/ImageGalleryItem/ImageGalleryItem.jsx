import React, { Component } from 'react';
import {
  GalleryItemImage,
  GalleryItemWrapper,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  state = {
    src: '',
    alt: '',
  };

  handleModalData = e => {
    const { alt } = e.currentTarget;
    this.setState(
      {
        src: this.props.largeImg,
        alt,
      },
      () => {
        this.props.openModal();
        this.props.sendData(this.state);
      }
    );
  };
  render() {
    const { smallImg, tags } = this.props;
    return (
      <GalleryItemWrapper className="gallery-item">
        <GalleryItemImage
          onClick={this.handleModalData}
          src={smallImg}
          alt={tags}
        />
      </GalleryItemWrapper>
    );
  }
}
