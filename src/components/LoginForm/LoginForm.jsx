import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

import {
    StyledLoginForm,
    LoginFormLabel,
    LoginFormInput,
    LoginFormSubmitButton,
} from "./LoginForm.styled";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    // перенаправлення на сторінку при логіні
    // const navigate = useNavigate();

    const loginFormOnSubmit = data => {
        console.log(data);
        // navigate("/inventory", { replace: true });
    };

    return (
        <StyledLoginForm onSubmit={handleSubmit(loginFormOnSubmit)}>
            <LoginFormLabel htmlFor="userName">
                User name (login):
                <LoginFormInput
                    name="userName"
                    type="userName"
                    {...register("userName", { required: true })}
                />
                {errors.userName && <p>Email is required.</p>}
            </LoginFormLabel>
            <LoginFormLabel htmlFor="password">
                Password
                <LoginFormInput
                    name="password"
                    type="password"
                    {...register("password", { required: true })}
                />
                {errors.password && <p>Password is required.</p>}
            </LoginFormLabel>
            <LoginFormSubmitButton type="submit">Login</LoginFormSubmitButton>
        </StyledLoginForm>
    );
};
