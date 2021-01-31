import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

function ElecBlock({ id, name, description, image, price, type, onClickAddElec, addedCount }) {

  const onAddElec = () => {
    const obj = {
      id,
      name,
      image,
      price,
      type: type || 0,
    };
    onClickAddElec(obj);
  };

  return (
    <div className="elec-block">
      <img className="elec-block__image" src={image} alt="Electronic" />
      <h4 className="elec-block__title">{name}</h4>
      <h3 className="elec-block__title">{description}</h3>
      <div className="elec-block__bottom">
        <div className="elec-block__price">from ${price}</div>
        <Button onClick={onAddElec} className="button--add" outline>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          {addedCount && <i>{addedCount}</i>}
        </Button>
      </div>
    </div>
  );
}

ElecBlock.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.number,
  onClickAddElec: PropTypes.func,
  addedCount: PropTypes.number,
};

ElecBlock.defaultProps = {
  name: '---',
  price: 0,
  types: 0,
};

export default ElecBlock;
