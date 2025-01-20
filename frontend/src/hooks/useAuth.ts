import { useSelector } from "react-redux";
import { selectCurrentToken } from "../features/auth/login/authSlice";
import { jwtDecode } from "jwt-decode";

const useAuth = () => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    const decoded = jwtDecode(token);
    const { UserInfo } = decoded as {
      UserInfo: { email: string; firstName: string };
    };
    const { firstName, email } = UserInfo || { email: "", firstName: "" };

    return { firstName, email };
  }

  return { email: "", firstName: "" };
};
export default useAuth;
