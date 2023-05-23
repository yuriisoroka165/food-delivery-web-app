import { useState } from "react";
import { CiLogin } from "react-icons/ci";

import { AuthNavigationContainer, LogInButton } from "./AuthNavigation.styled";
import { ReactModalWindow } from "../common/ReactModalWindow/ReactModalWindow";
import { iconSize } from "../../constants/iconSize";
import { LoginForm } from "../LoginForm/LoginForm";

export default function AuthNavigation() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <>
            <AuthNavigationContainer>
                <LogInButton onClick={openModal}>
                    LogIn <CiLogin size={iconSize.medium} />
                </LogInButton>
            </AuthNavigationContainer>
            <ReactModalWindow
                isOpen={modalIsOpen}
                onClose={closeModal}
            >
                <LoginForm />
            </ReactModalWindow>
        </>
    );
}
