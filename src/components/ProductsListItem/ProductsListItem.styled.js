import styled from "@emotion/styled";

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 200;
    padding: 15px;
    border: 1px solid ${({ theme }) => `${theme.colors.globalWhiteColor}`};
    border-radius: 10px;
`;

export const ImageContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

export const ItemImage = styled.img`
    margin-bottom: 10px;
    width: 200px;
    height: 150px;
    border: 1px solid ${({ theme }) => `${theme.colors.globalWhiteColor}`};
    border-radius: 10px;
`;

export const ItemTitle = styled.p`
    margin: 0;
    padding: 0;

`;

export const ItemButton = styled.button`
    margin-left: auto;
    width: 80px;
    height: 30px;
    background-color: ${({ theme }) => theme.colors.globalGreenColor};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.globalWhiteColor};
    box-shadow: ${({ theme }) => theme.shadows.formInputShadow};
    cursor: pointer;

    &:active {
        background-color: ${({ theme }) => theme.colors.globalGrayColor};
        color: ${({ theme }) => theme.colors.globalWhiteColor};
    }
`;
