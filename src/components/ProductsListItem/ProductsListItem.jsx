import {
    ItemContainer,
    ImageContainer,
    ItemImage,
    ItemTitle,
    ItemButton,
} from "./ProductsListItem.styled";

export default function ProductsListItem({ data }) {
    const { name, imageLink } = data;
    console.log(name);
    return (
        <ItemContainer>
            <ImageContainer>
                <ItemImage src={imageLink} />
                <ItemTitle>{name}</ItemTitle>
            </ImageContainer>
            <ItemButton>add to Cart</ItemButton>
        </ItemContainer>
    );
}
