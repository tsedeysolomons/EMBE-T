import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "@/hooks/use-toast";
//import { AlignJustify } from "lucide-react";

type SignInProps = {
  switchPage?: () => void;
};

function SignIn({ switchPage }: SignInProps) {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log({ email, password });

      const { accessToken } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err: unknown) {
      // Type guard to check if err is an object with status and data
      if (typeof err === "object" && err !== null) {
        const { status, data } = err as {
          status?: number;
          data?: { message: string };
        };

        if (!status) {
          toast({
            variant: "destructive",
            title: "Uh oh! No Server Response",
          });
        } else if (status === 400) {
          toast({
            variant: "destructive",
            title: "Uh oh! Missing email or Password",
          });
        } else if (status === 401) {
          toast({
            variant: "destructive",
            title: "Uh oh! Unauthorized",
          });
        } else {
          toast({
            variant: "destructive",
            title: data?.message ?? "Uh oh! Something went wrong",
          });
        }
      } else {
        // Handle unexpected error types
        toast({
          variant: "destructive",
          title: "Uh oh! An unexpected error occurred",
        });
      }

      // Ensure errRef is defined and points to a valid element
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  const handleEmail = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setEmail(e.target?.value);
  const handlePwdInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setPassword(e.target.value);

  // const errClass = errMsg ? "errmsg" : "offscreen";

  return (
    <>
      <form className="p-6 md:p-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">Welcome back To EMBET</h1>
            <p className="text-balance text-muted-foreground">
              Login to your Ethiopian Midr Babur E-Ticket account
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={handleEmail}
              required
              ref={userRef}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-2 hover:underline text-red-500"
              >
                Forgot your password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={handlePwdInput}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>

          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a
              href="#"
              onClick={switchPage}
              className="underline underline-offset-4"
            >
              Signup/Register
            </a>
          </div>
          {/* Add your image here */}
        </div>
      </form>
      <div className="relative hidden bg-muted md:block">
        <img
          src="https://sholajobs.com/wp-content/uploads/2023/08/Ethiopian-Railways-Corporation-1.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </>
  );
}

export default SignIn;
