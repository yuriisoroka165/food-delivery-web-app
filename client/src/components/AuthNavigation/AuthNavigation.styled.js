import styled from "@emotion/styled";

export const AuthNavigationContainer = styled.div`
    display: flex;
    gap: 40px;
`;

export const LogInButton = styled.button`
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 0;
    font-weight: 500;
    font-size: 16px;
    line-height: ${() => 47 / 40};
    letter-spacing: 0.02em;
    font-family: ${({ theme }) => theme.fonts.globalFont};
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.globalFontColor};

    &:hover {
        color: ${({ theme }) => theme.colors.linkHoverColor};
    }

    &:active {
        color: ${({ theme }) => theme.colors.linkActiveColor};
    }

    svg {
        fill: ${({ theme }) => theme.colors.navigationIconColor};
    }

    &:hover {
        svg {
            fill: ${({ theme }) => theme.colors.linkHoverColor};
        }
    }

    &:active {
        svg {
            fill: ${({ theme }) => theme.colors.linkActiveColor};
        }
    }
`;
