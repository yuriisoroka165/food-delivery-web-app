import { AiOutlineCloseCircle } from "react-icons/ai";

import { CloseButton } from "./CloseButtonComponent.styled";
import { iconSize } from "../../../constants/iconSize";

export const CloseButtonComponent = ({onClick}) => {
    return (
        <CloseButton onClick={onClick}>
            <AiOutlineCloseCircle size={iconSize.medium} />
        </CloseButton>
    );
};
