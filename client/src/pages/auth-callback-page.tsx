import { useCreateUser } from "@/api/user-api";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const AuthCallbackPage = () => {
  const hasCreatedUser = useRef(false)

  const navigate = useNavigate()

  const { user } = useAuth0();
  const { createUser } = useCreateUser();

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true
    }
    navigate("/")
  }, [createUser, navigate, user]);

  return <>Loading...</>
};
