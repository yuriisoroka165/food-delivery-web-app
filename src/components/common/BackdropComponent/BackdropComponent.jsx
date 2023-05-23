import { Backdrop } from "./Backdrop.styled";

export const BackdropComponent = ({children}) => {
    return (
        <Backdrop>
            {children}
        </Backdrop>
    );
}