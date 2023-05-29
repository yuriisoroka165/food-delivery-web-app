import {
    ItemContainer,
    ItemImage,
    ItemTitle,
    DetailContainer,
    ItemCount,
    CountLabel,
} from "./CartListItem.styled";

export default function CartListItem({ productData }) {
    const { name, imageLink, price } = productData;
    return (
        <li>
            <ItemContainer>
                <ItemImage src={imageLink} />
                <DetailContainer>
                    <ItemTitle>{name}</ItemTitle>
                    <ItemTitle>Price: {price}</ItemTitle>
                    <CountLabel htmlFor="count">
                        Count:
                        <ItemCount name="count" type="number" step="1" min="1"></ItemCount>
                    </CountLabel>
                </DetailContainer>
            </ItemContainer>
        </li>
    );
}
