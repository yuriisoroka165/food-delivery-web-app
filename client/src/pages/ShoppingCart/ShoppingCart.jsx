// import { useLogOutRedirect } from "hooks";

import { ShoppingCartContainer } from "./ShoppingCart.styled";
import OrderForm from "../../components/OrderFrom";
import Cart from "../../components/Cart";


export default function ShoppingCart() {
    // useLogOutRedirect();
    return (
        <ShoppingCartContainer>
            <OrderForm />
            <Cart />
        </ShoppingCartContainer>
    );
}
