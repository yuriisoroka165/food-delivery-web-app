import styled from "@emotion/styled";

export const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const LoginFormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    /* text-transform: uppercase; */
    color: ${({ theme }) => theme.colors.globalWhiteColor};
`;

export const LoginFormInput = styled.input`
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.globalGrayColor};
    color: ${({ theme }) => theme.colors.globalWhiteColor};
    box-shadow: ${({ theme }) => theme.shadows.formInputShadow};

    &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.globalGreenColor};
    }
`;

export const LoginFormSubmitButton = styled.button`
    margin-left: auto;
    margin-right: auto;
    width: 100px;
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
