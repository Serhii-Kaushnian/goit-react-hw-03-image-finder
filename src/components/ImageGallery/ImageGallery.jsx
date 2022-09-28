import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryWrapper } from './ImageGallery.styled';
export default class ImageGallery extends Component {
  render() {
    const { hits } = this.props;
    return (
      <GalleryWrapper className="gallery">
        {hits.map(hit => {
          return <ImageGalleryItem key={hit.id} smallImg={hit.webformatURL} />;
        })}
      </GalleryWrapper>
    );
  }
}
