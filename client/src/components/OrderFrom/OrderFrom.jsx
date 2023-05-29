import { useForm } from "react-hook-form";

import {
    OrderFormContainer,
    StyledOrderForm,
    OrderFormLabel,
    OrderFormInput,
    OrderFormSubmitButton,
} from "./OrderFrom.styled";

export default function OrderForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const orderFormOnSubmit = data => {
        console.log(data);
    };

    return (
        <OrderFormContainer>
            <StyledOrderForm onSubmit={handleSubmit(orderFormOnSubmit)}>
                <OrderFormLabel htmlFor="name">
                    Name:
                    <OrderFormInput
                        name="name"
                        type="name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <p>Name is required.</p>}
                </OrderFormLabel>
                <OrderFormLabel htmlFor="email">
                    Email:
                    <OrderFormInput
                        name="email"
                        type="email"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <p>Email is required.</p>}
                </OrderFormLabel>
                <OrderFormLabel htmlFor="phone">
                    Phone:
                    <OrderFormInput
                        name="phone"
                        type="phone"
                        {...register("phone", { required: true })}
                    />
                    {errors.phone && <p>Phone is required.</p>}
                </OrderFormLabel>
                <OrderFormLabel htmlFor="name">
                    Address:
                    <OrderFormInput
                        name="address"
                        type="address"
                        {...register("address", { required: true })}
                    />
                    {errors.address && <p>Address is required.</p>}
                </OrderFormLabel>
                <OrderFormSubmitButton type="submit">Buy now</OrderFormSubmitButton>
            </StyledOrderForm>
        </OrderFormContainer>
    );
}
