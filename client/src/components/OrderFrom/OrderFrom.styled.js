import styled from "@emotion/styled";

export const OrderFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 50%;
    padding: 20px;
    border: 1px solid ${({ theme }) => `${theme.colors.globalWhiteColor}`};
    border-radius: 10px;
`;
export const StyledOrderForm = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 30px;
`;
export const OrderFormLabel = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.globalWhiteColor};
`;
export const OrderFormInput = styled.input`
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
export const OrderFormSubmitButton = styled.button`
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
