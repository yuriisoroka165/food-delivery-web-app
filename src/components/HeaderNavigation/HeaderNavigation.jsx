import { HeaderNav, HeaderLink } from "./HeaderNavigation.styled";

export default function HeaderNavigation() {
    return (
        <HeaderNav>
            <HeaderLink to="/">Shop</HeaderLink>
            <HeaderLink to="/cart">Shopping Cart</HeaderLink>
        </HeaderNav>
    );
}
