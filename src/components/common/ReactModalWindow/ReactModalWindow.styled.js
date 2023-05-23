import styled from "@emotion/styled";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

export const ModalWindow = styled(ReactModal)`
    position: absolute;
    top: 50%;
    left: 50%;
    padding: 20px;
    width: 350px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    transform: translate(-50%, -50%) scale(1);
`;
