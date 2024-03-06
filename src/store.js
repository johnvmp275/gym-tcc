// store.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cartItems: [],
            cartWasOpen: false,
            boxShadowWasOpen: false
        };
    },
    mutations: {
        addToCart(state, product) {
            state.cartItems.push(product);
        },
        setCartItems(state, cartItems) {
            state.cartItems = cartItems;
        },
        toggleCart(state) {
            state.cartWasOpen = !state.cartWasOpen;
            state.boxShadowWasOpen = !state.boxShadowWasOpen;
        }
    }
});

export default store;
