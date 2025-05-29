import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "@features/auth/model/api";
import { useState } from "react";

import * as S from "./styles";
import FormWrapper from "@shared/ui/form/FormWrapper";
import FormInput from "@shared/ui/form/FormInput";
import FormCheckbox from "@shared/ui/form/FormCheckbox";
import FormError from "@shared/ui/form/FormError";
import { useDispatch } from "react-redux";
import { setUser } from "@features/auth/model/authSlice";

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters"),
    email: z.string().email("Invalid email"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must be at most 40 characters"),
    repeatPassword: z.string(),
    agree: z.literal(true, {
      errorMap: () => ({ message: "You must agree to continue" }),
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Passwords must match",
    path: ["repeatPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  const dispatch = useDispatch();
  const [formError, setFormError] = useState("");
  const [registerUser] = useRegisterUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterFormData) => {
    setFormError("");

    try {
      const res = await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      }).unwrap();

      dispatch(setUser({ user: res.user, token: res.user.token }));
      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", res.user.token);

      navigate("/");
    } catch (err: any) {
      const apiErrors = err?.data?.errors;

      if (apiErrors) {
        Object.entries(apiErrors).forEach(([field, messages]) => {
          const message = Array.isArray(messages)
            ? messages.join(", ")
            : messages;
          setError(field as keyof RegisterFormData, {
            message: String(message),
          });
        });
      } else {
        setFormError("Registration failed. Please try again.");
      }
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Create new account</S.Title>

        <FormError message={formError} />

        <FormInput
          label="Username"
          {...register("username")}
          error={errors.username?.message}
        />

        <FormInput
          label="Email address"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <FormInput
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <FormInput
          label="Repeat Password"
          type="password"
          {...register("repeatPassword")}
          error={errors.repeatPassword?.message}
        />

        <FormCheckbox
          label="I agree to the processing of my personal information"
          {...register("agree")}
        />

        {errors.agree && (
          <S.CheckboxError>{errors.agree.message}</S.CheckboxError>
        )}

        <S.Button type="submit">Create</S.Button>

        <S.BottomText>
          Already have an account?
          <S.Link href="/sign-in">Sign in.</S.Link>
        </S.BottomText>
      </form>
    </FormWrapper>
  );
};

export default RegisterPage;
