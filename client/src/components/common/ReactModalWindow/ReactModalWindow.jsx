// import { useState } from "react";

import { CloseButtonComponent } from "../CloseButtonComponent/CloseButtonComponent";
import { ModalWindow } from "./ReactModalWindow.styled";

export const ReactModalWindow = ({ onClose, isOpen, children }) => {
    return (
        <>
            <ModalWindow
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel="Login window"
                shouldCloseOnOverlayClick={true}
                shouldCloseOnEsc={true}
            >
                <CloseButtonComponent onClick={onClose} />
                {children}
            </ModalWindow>
        </>
    );
};
