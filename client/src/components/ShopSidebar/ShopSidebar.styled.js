import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 300px;
    padding: 20px;
    border: 1px solid ${({ theme }) => `${theme.colors.globalWhiteColor}`};
    border-radius: 10px;
`;

export const SidebarButton = styled.button`
    width: 200px;
    height: 50px;
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
