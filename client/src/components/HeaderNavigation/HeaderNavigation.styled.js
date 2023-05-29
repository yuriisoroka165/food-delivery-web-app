import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const HeaderNav = styled.nav`
    display: flex;
    gap: 40px;
`;

export const HeaderLink = styled(NavLink)`
    position: relative;
    padding-top: ${({ theme }) => theme.spacing(6)};
    padding-bottom: ${({ theme }) => theme.spacing(6)};
    font-weight: 500;
    font-size: 16px;
    line-height: ${() => 47 / 40};
    letter-spacing: 0.02em;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.globalFontColor};

    &:hover {
        color: ${({ theme }) => theme.colors.linkHoverColor};
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -1px;
        min-width: 100%;
        width: 16px;
        height: 4px;
        background-color: ${({ theme }) => theme.colors.accentColor};
        opacity: 0;
        border-radius: 2px;
    }

    &:hover::after,
    &:focus::after {
        opacity: 1;
    }

    &.active::after {
        opacity: 1;
    }
`;
