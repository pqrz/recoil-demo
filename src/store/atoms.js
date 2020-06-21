import { atom } from 'recoil';

export const cart = atom({
    key: 'cart',
    default: [
        {id: 'iphone', name: 'iPhone XR', price: 3000, qty: 2},
        {id: 'tv', name: '40" TV', price: 6000, qty: 1},
    ]
});