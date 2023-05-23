import styled from "@emotion/styled";

export const CloseButton = styled.button`
    display: flex;
    gap: 5px;
    align-items: center;
    margin-left: auto;
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    padding: 0;
    background: none;
    border: none;
    cursor: pointer;

    svg {
        fill: ${({ theme }) => theme.colors.globalWhiteColor};
    }

    &:hover {
        svg {
            fill: ${({ theme }) => theme.colors.linkHoverColor};
        }
    }

    &:active {
        svg {
            fill: ${({ theme }) => theme.colors.globalBlackColor};
        }
    }
`;
