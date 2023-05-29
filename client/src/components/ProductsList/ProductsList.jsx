import ProductsListItem from "../../components/ProductsListItem";
import { ProductsListContainer } from "./ProductsList.styled";

export default function ProductsList() {
    const products = [
        {
            id: 1,
            name: "Hamburger",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black_bg%29.jpg/250px-Hamburger_%28black_bg%29.jpg",
            price: "333",
        },
        {
            id: 2,
            name: "French fries",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/French_Fries.JPG/250px-French_Fries.JPG",
            price: "333",
        },
        {
            id: 3,
            name: "Chicken nuggets",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Chicken_Nuggets.jpg/220px-Chicken_Nuggets.jpg",
            price: "333",
        },
        {
            id: 4,
            name: "Pizza",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/220px-Pizza-3007395.jpg",
            price: "333",
        },
        {
            id: 5,
            name: "Chicken soup",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Chicken_Noodle_Soup.jpg/220px-Chicken_Noodle_Soup.jpg",
            price: "333",
        },
        {
            id: 6,
            name: "Noodle soup",
            imageLink:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nabeyaku_ramen_%28cropped%29.jpg/250px-Nabeyaku_ramen_%28cropped%29.jpg",
            price: "333",
        },
    ];

    return (
        <ProductsListContainer>
            {products.map(product => {
                return <ProductsListItem key={product.id} productData={product} />;
            })}
        </ProductsListContainer>
    );
}
