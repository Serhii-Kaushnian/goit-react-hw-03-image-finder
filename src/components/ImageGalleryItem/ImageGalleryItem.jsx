import React, { Component } from 'react';
import {
  GalleryItemImage,
  GalleryItemWrapper,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends Component {
  render() {
    const { smallImg } = this.props;
    return (
      <GalleryItemWrapper className="gallery-item">
        <GalleryItemImage src={smallImg} alt="" />
      </GalleryItemWrapper>
    );
  }
}
