import React from 'react'
import { useCart } from '../context';
import { CartEmpty } from '../Cart/components/CartEmpty';
import { CartList } from '../Cart/components/CartList';

export function CartPage() {
    const { cartList } = useCart();

    return (
        <main>
            {cartList.length ? <CartList /> : <CartEmpty />}
        </main>
    )
}
