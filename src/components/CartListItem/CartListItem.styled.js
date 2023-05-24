import styled from "@emotion/styled";

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    height: 200;
    padding: 15px;
    border: 1px solid ${({ theme }) => `${theme.colors.globalWhiteColor}`};
    border-radius: 10px;
`;

export const DetailContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

export const ItemImage = styled.img`
    margin-bottom: 10px;
    width: 230px;
    height: 150px;
    border: 1px solid ${({ theme }) => `${theme.colors.globalWhiteColor}`};
    border-radius: 10px;
`;

export const ItemTitle = styled.p`
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
`;

export const CountLabel = styled.label`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.globalWhiteColor};
`;

export const ItemCount = styled.input`
    padding-left: 10px;
    padding-right: 0px;
    height: 30px;
    border: none;
    line-height: 40px;
    text-indent: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.globalGrayColor};
    color: ${({ theme }) => theme.colors.globalWhiteColor};
    box-shadow: ${({ theme }) => theme.shadows.formInputShadow};

    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.globalGreenColor};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        margin: 0;
    }
`;
