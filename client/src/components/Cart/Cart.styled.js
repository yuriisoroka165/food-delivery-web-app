import styled from "@emotion/styled";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 80%;
    height: 60vh;
    overflow-y: scroll;
    padding: 20px;
    border: 1px solid ${({ theme }) => `${theme.colors.globalWhiteColor}`};
    border-radius: 10px;
`;
