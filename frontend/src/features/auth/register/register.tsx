import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../login/authApiSlice";
import { setCredentials } from "../login/authSlice";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

type SignUpProps = {
  switchPage?: () => void;
};

function SignUp({ switchPage }: SignUpProps) {
  const { toast } = useToast();

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLElement>(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signUp, { isLoading }] = useSignUpMutation();

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    // Allow only digits
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value); // Assuming you have a state setter for phoneNumber
    }
  };

  useEffect(() => {
    userRef?.current?.focus();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { accessToken } = await signUp({
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
      }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      navigate("/");
    } catch (err: { status?: number; data?: { message: string } }) {
      if (!err?.status) {
        toast({
          variant: "destructive",
          title: "Uh oh!No Server Response",
        });
      } else if (err?.status === 400) {
        toast({
          variant: "destructive",
          title: "Uh oh!Missing email or Password",
        });
      } else if (err?.status === 401) {
        toast({
          variant: "destructive",
          title: "Uh oh!Unauthorized",
        });
      } else {
        toast({
          variant: "destructive",
          title: err?.data?.message,
        });
      }
      errRef.current?.focus();
    }
  };

  const handleEmail = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setEmail(e.target.value);
  const handlePwdInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => setPassword(e.target.value);

  return (
    <>
      <form className="p-6 md:p-8" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">
              Welcome To EMB E-Ticket Signup page
            </h1>
            <p className="text-balance text-muted-foreground">
              Register to your Ethiopian Midr Babur E-Ticket official account
            </p>
          </div>
          <ScrollArea className="h-64 w-full [&_div]:p-1 m-0">
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                type="firstName"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                ref={userRef}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastname"
                type="lastname"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                ref={userRef}
              />
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
                  className="ml-auto text-sm underline-offset-2 hover:underline"
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
            <div className="grid gap-2">
              <Label htmlFor="phoneNumber">phoneNumber</Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Entere your phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
                ref={userRef}
              />
            </div>
          </ScrollArea>
          <Button type="submit" className="w-full">
            Signup
          </Button>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <a
              href="Signup"
              onClick={switchPage}
              className="underline underline-offset-4"
            >
              Signup/Login
            </a>
          </div>
        </div>
      </form>
      <div className="relative hidden bg-muted md:block">
        <img
          src="./src/asset/image/image.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </>
  );
}

export default SignUp;
