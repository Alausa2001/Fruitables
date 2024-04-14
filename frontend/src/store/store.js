import { configureStore } from '@reduxjs/toolkit';
import createStore from 'react-auth-kit/createStore';
import cartReducer from '../features/cart/cartSlice';

const reduxStore = configureStore({
  reducer: {
    cart: cartReducer
  },
})

const authStore = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

export { reduxStore, authStore };