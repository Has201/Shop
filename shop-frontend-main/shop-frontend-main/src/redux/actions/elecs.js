import axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchElecs = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });

  axios
    .get(
      `https://elec-shop-api.herokuapp.com/api/product?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setElecs(
        data.map((x) => ({...x, id: x._id}))
        )
      );
    });
};

export const setElecs = (items) => ({
  type: 'SET_ELECS',
  payload: items,
});
