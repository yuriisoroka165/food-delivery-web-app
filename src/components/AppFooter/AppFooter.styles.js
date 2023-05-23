import styled from "@emotion/styled";

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
`;

export const FooterComponent = styled.footer`
    margin-top: 30px;
    position: relative;
    width: 100%;
    border-top: ${({ theme }) => `1px solid ${theme.colors.footerLineColor}`};
    background-color: ${({ theme }) => `${theme.colors.footerBackgroundColor}`};
    box-shadow: ${({ theme }) => `${theme.shadows.footerShadow}`};
`;
