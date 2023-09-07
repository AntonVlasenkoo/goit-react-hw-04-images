import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export function ImageGallery({ children, onClick }) {
  return (
    <ul onClick={onClick} className={css.ImageGallery}>
      {children}
    </ul>
  );
}

ImageGallery.prototype = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
