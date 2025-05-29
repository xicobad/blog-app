import { AppDispatch } from "@app/store";
import { setUser } from "@features/auth/model/authSlice";

export const initAuth = () => (dispatch: AppDispatch) => {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  if (user && token) {
    try {
      dispatch(setUser({ user: JSON.parse(user), token }));
    } catch {
      console.warn("Invalid auth data in localStorage");
    }
  }
};
