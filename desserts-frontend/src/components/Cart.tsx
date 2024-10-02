import { useContext, useEffect, useState } from "react";
import CartItem from "./CartItem";
import { CartContext } from "../pages/Home";

export type CartItemType = {
    name: string;
    price: number;
};

export type VisibleCartType = {
    item: CartItemType;
    quantity: number;
};

const Cart = () => {
    const cartCtx = useContext(CartContext);

    if (!cartCtx) {
        throw new Error("Nincs kontextus");
    }

    const { cart } = cartCtx;

    const [visibleCart, setVisibleCart] = useState<VisibleCartType[]>([]);

    useEffect(() => {
        let unique: string[] = [];
        cart.forEach((cartItem) => {
            if (!unique.includes(cartItem.name)) {
                unique.push(cartItem.name);
            }
        });

        let tempCart = [];

        unique.forEach((dessert_name) => {
            let counter = 0;
            cart.forEach((cartItem) => {
                if (cartItem.name === dessert_name) {
                    counter++;
                }
            });
            let visibleItem: VisibleCartType = {
                item: 
            }
        });
    }, [cartCtx]);

    return (
        <aside className="cart">
            <h2>Your Cart ({cart.length})</h2>
            {cart.map((cartitem) => (
                <CartItem {...cartitem} />
            ))}
        </aside>
    );
};

export default Cart;
