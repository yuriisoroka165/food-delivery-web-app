import { ShopContainer } from "./Shop.styled";
import ShopSidebar from "../../components/ShopSidebar";
import ProductsList from "../../components/ProductsList";

export default function Home() {
    return (
        <ShopContainer>
            <ShopSidebar />
            <ProductsList />
        </ShopContainer>
    );
}
