import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useUpdateUserMutation } from "@features/auth/model/api";
import { setUser } from "@features/auth/model/authSlice";
import { useAppDispatch } from "@shared/lib/hooks/useAppDispatch";
import { RootState } from "@app/store";

import * as S from "./styles";
import FormInput from "@shared/ui/form/FormInput";

const profileSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters"),

  email: z.string().email("Invalid email"),

  newPassword: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must be at most 40 characters")
    .optional()
    .or(z.literal("")),

  avatar: z
    .string()
    .url("Avatar must be a valid URL")
    .optional()
    .or(z.literal("")),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [updateUser] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "onTouched",
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      newPassword: "",
      avatar: user?.image || "",
    },
  });

  const onSubmit = async (data: ProfileFormData) => {
    try {
      const res = await updateUser({
        user: {
          username: data.username,
          email: data.email,
          password: data.newPassword || undefined,
          image: data.avatar || undefined,
        },
      }).unwrap();

      dispatch(setUser({ user: res.user, token: res.user.token }));

      localStorage.setItem("user", JSON.stringify(res.user));
      localStorage.setItem("token", res.user.token);

      reset({
        username: res.user.username,
        email: res.user.email,
        newPassword: "",
        avatar: res.user.image ?? "",
      });

      navigate("/profile");
    } catch (err: any) {
      const apiErrors = err?.data?.errors;
      if (apiErrors) {
        Object.entries(apiErrors).forEach(([field, messages]) => {
          setError(field as keyof ProfileFormData, {
            message: Array.isArray(messages)
              ? messages.join(", ")
              : String(messages),
          });
        });
      }
    }
  };

  return (
    <S.Wrapper>
      <S.Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Title>Edit Profile</S.Title>

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
            label="New Password"
            type="password"
            {...register("newPassword")}
            error={errors.newPassword?.message}
          />

          <FormInput
            label="Avatar image (URL)"
            {...register("avatar")}
            error={errors.avatar?.message}
          />

          <S.Button type="submit">Save</S.Button>
        </form>
      </S.Card>
    </S.Wrapper>
  );
};

export default ProfilePage;
