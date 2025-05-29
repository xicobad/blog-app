import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useLoginUserMutation } from "@features/auth/model/api";
import { setUser } from "@features/auth/model/authSlice";

import FormWrapper from "@shared/ui/form/FormWrapper";
import FormInput from "@shared/ui/form/FormInput";
import * as S from "./styles";

const loginSchema = z.object({
  email: z.string().email("Uncorret email"),
  password: z.string().min(1, "You forgot to write password"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await loginUser(data).unwrap();
      dispatch(setUser({ user: res.user, token: res.user.token }));

      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", res.user.token);

      navigate("/");
    } catch (err: any) {
      setError("email", { message: "Неверный email или пароль" });
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Sign In</S.Title>

        <FormInput
          label="Email address"
          placeholder="Email address"
          {...register("email")}
          error={errors.email?.message}
        />

        <FormInput
          label="Password"
          placeholder="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <S.Button type="submit">Login</S.Button>

        <S.BottomText>
          Don’t have an account?
          <S.Link href="/sign-up">Sign up.</S.Link>
        </S.BottomText>
      </form>
    </FormWrapper>
  );
};

export default LoginPage;
