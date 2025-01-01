import {
    LOG_IN
  } from './actions';
  
  const initialState = {
    isLoggedIn: null
  };
  
  const reducer = (state, { type, payload }) => {
    switch (type) {
      case LOG_IN: {
        return { ...state, isLoggedIn: payload };
      }
      default:
        throw new Error();
    }
  };
  
  export { reducer, initialState };