import ProductsListItem from "components/ProductsListItem";
import { ProductsListContainer } from "./ProductsList.styled";

export default function ProductsList() {
    const products = [
        {
            id: 1,
            name: "Hamburger",
            imageLink:
                "https://pixabay.com/get/g647fd77ba90d957954199ef17774b1b85c20e1300965b8c6ae671b6a545550be324043e6268e415e274b2849df87bd05f8e8dae9bd1f4f37cb53c3c2244c66ca_1280.jpg",
        },
        {
            id: 2,
            name: "French fries",
            imageLink:
                "https://pixabay.com/get/g06c2cf1b7fc843cb50e91b89b82c3eeb617f2fd5ad7ef0a525609641b54274944fb3e5c44c9746ceb58d7558be7062b786a16ff429452fb8f024ffef7e4deb5c_1280.jpg",
        },
        {
            id: 3,
            name: "Chicken nuggets",
            imageLink:
                "https://pixabay.com/get/g3df8979ea828d1f5e96f158907d712fad341e7f41560c0a713de884a6c6c75dcce4e7423f7d413fbe9c0e6c4d671010064576a436be30a52301a707569cc838a_1280.jpg",
        },
        {
            id: 4,
            name: "Pizza",
            imageLink:
                "https://pixabay.com/get/gfc63d8725d65595d1513db26e1782106bbca84860b72fb19eaf3316ea08c23f9bde693cfe710b4ce3653f7aa480a5f114634834365d906cc5efe0445dfb5f0fb_1280.jpg",
        },
        {
            id: 5,
            name: "Pizza",
            imageLink:
                "https://pixabay.com/get/gfc63d8725d65595d1513db26e1782106bbca84860b72fb19eaf3316ea08c23f9bde693cfe710b4ce3653f7aa480a5f114634834365d906cc5efe0445dfb5f0fb_1280.jpg",
        },
        {
            id: 6,
            name: "Chicken nuggets",
            imageLink:
                "https://pixabay.com/get/g3df8979ea828d1f5e96f158907d712fad341e7f41560c0a713de884a6c6c75dcce4e7423f7d413fbe9c0e6c4d671010064576a436be30a52301a707569cc838a_1280.jpg",
        },
    ];

    return (
        <ProductsListContainer>
            {products.map(product => {
                return <ProductsListItem key={product.id} data={product} />;
            })}
        </ProductsListContainer>
    );
}
