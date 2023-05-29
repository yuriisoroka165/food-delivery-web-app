import {
    ItemContainer,
    ImageContainer,
    ItemImage,
    ItemTitle,
    ItemButton,
} from "./ProductsListItem.styled";

export default function ProductsListItem({ productData }) {
    const { name, imageLink, price } = productData;
    return (
        <ItemContainer>
            <ImageContainer>
                <ItemImage src={imageLink} />
                <ItemTitle>{name}</ItemTitle>
                <ItemTitle>Price: {price}</ItemTitle>
            </ImageContainer>
            <ItemButton>add to Cart</ItemButton>
        </ItemContainer>
    );
}
