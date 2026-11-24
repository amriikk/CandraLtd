import { addItemToCart, removeItemFromCart } from './cart.utils';

const hat = { id: 1, name: 'Brown Brim', price: 25 };
const beanie = { id: 2, name: 'Blue Beanie', price: 18 };

describe('addItemToCart', () => {
    it('adds a new item with a quantity of 1', () => {
        expect(addItemToCart([], hat)).toEqual([{ ...hat, quantity: 1 }]);
    });

    it('groups a repeat item by raising its quantity', () => {
        const cart = [{ ...hat, quantity: 1 }];
        expect(addItemToCart(cart, hat)).toEqual([{ ...hat, quantity: 2 }]);
    });

    it('leaves other items alone', () => {
        const cart = [{ ...hat, quantity: 1 }, { ...beanie, quantity: 3 }];
        const result = addItemToCart(cart, hat);
        expect(result[1]).toEqual({ ...beanie, quantity: 3 });
    });
});

describe('removeItemFromCart', () => {
    it('lowers the quantity by 1', () => {
        const cart = [{ ...hat, quantity: 2 }];
        expect(removeItemFromCart(cart, hat)).toEqual([{ ...hat, quantity: 1 }]);
    });

    it('removes the item when its quantity reaches 0', () => {
        const cart = [{ ...hat, quantity: 1 }, { ...beanie, quantity: 1 }];
        expect(removeItemFromCart(cart, hat)).toEqual([{ ...beanie, quantity: 1 }]);
    });
});