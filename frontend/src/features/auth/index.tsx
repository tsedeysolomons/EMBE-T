import { Card, CardContent } from "@/components/ui/card";
import { useContext, useState } from "react";
import { cn } from "@/lib/utils";
import SignIn from "./login/login-form";
import SignUp from "./register/register";
import { AppContext } from "@/context/AppProvider";

const AuthPage = () => {
  const [loginPage, setLoginPage] = useState(true);

  const { setModalTitle } = useContext(AppContext);

  const switchpage = () => {
    setLoginPage(!loginPage);

    setModalTitle(loginPage ? "SignIn Page" : "SignUp Page");
  };

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className={cn("flex flex-col gap-6")}>
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              {loginPage ? (
                <SignIn switchPage={switchpage} />
              ) : (
                <SignUp switchPage={switchpage} />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
