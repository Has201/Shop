import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, ElecBlock, ElecLoadingBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchElecs } from '../redux/actions/elecs';

const categoryNames = [{ label: 'Computers', value: 0}, {label: 'Laptops', value: 1}, {label: 'Phones', value: 2}];
const sortIems = [
  { name: 'Name', type: 'name', order: 'asc' },
  { name: 'Price', type: 'price', order: 'desc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ elecs }) => elecs.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ elecs }) => elecs.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchElecs(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddElecToCart = (obj) => {
    dispatch({
      type: 'ADD_ELEC_CART',
      payload: obj,
    });
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">All Electronics</h2>
      <div className="content__items">
        {isLoaded
          ? (items.length && items.map((obj) => (
              <ElecBlock
                onClickAddElec={handleAddElecToCart}
                key={obj.id}
                addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                {...obj}
              />
            ))) || <div className="no-items">No Items</div>
          : Array(12)
              .fill(0)
              .map((_, index) => <ElecLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
