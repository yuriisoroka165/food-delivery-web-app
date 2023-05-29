import styled from "@emotion/styled";


export const ProductsListContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
    border: 1px solid ${({ theme }) => `${theme.colors.globalWhiteColor}`};
    border-radius: 10px;
`;