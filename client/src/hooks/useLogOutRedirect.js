import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// кастомний хук
const useLogOutRedirect = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/", { replace: true });
        }
    }, [isLoggedIn, navigate]);
};

export default useLogOutRedirect;
