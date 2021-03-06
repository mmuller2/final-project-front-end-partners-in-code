import React from 'react';
import css from './Item.module.css';

export default function Item({ img, alt, title, location }) {
  return (
    <div className={css.background}>
      <div className={css.box} data-testid="item">
        <img src={img} alt={alt} />
      </div>

      <p className={css.title} data-testid="item-title">
        {title}
      </p>
      <p className={css.location} data-testid="item-location">
        {location}
      </p>
    </div>
  );
}
