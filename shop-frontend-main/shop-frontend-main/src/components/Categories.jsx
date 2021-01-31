import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          All
        </li>
        {items &&
          items.map((item) => (
            <li
              className={activeCategory === item.value ? 'active' : ''}
              onClick={() => onClickCategory(item.value)}
              key={`${item.label}_${item.value}`}>
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.shape({label: PropTypes.string, value: PropTypes.number})).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;
