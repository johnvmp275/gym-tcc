// store.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cartItems: [],
            cartWasOpen: false,
            boxShadowWasOpen: false,
            menuWasOpen: false
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
        },
        toggleMenu(state) {
            state.menuWasOpen = !state.menuWasOpen;
        },
    }
});

export default store;
