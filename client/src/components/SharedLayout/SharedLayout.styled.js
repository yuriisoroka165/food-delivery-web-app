import styled from "@emotion/styled";

export const Container = styled.div`
    flex-grow: 1;
    margin-left: auto;
    margin-right: auto;
    padding-left: ${props => props.theme.spacing(4)};
    padding-right: ${props => props.theme.spacing(4)};
    width: 1200px;
    height: 100vh;
`;
