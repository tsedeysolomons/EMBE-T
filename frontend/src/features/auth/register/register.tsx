import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import React, { FormEvent, useEffect, useRef } from "react";
import { useSignUpMutation } from "../login/authApiSlice";
import { ScrollArea } from "../../../components/ui/scroll-area";
import { useToast } from "../../../hooks/use-toast";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../../../components/ui/popover"; // Adjust the import path as necessary
//import { FormLabel, FormControl } from "@/components/ui/form"; // Adjust the import path as necessary
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { format } from "date-fns";
import { cn } from "../../../lib/utils";
import { Calendar } from "../../../components/ui/calendar"; // Adjust the import path as necessary
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"; // Adjust the import path as necessary
type SignUpProps = {
  switchPage: () => void;
};

function SignUp({ switchPage }: SignUpProps) {
  const { toast } = useToast();

  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLElement>(null);

  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      const result = await signUp({
        title,
        firstName,
        middleName,
        lastName,
        dateOfBirth: date,
        country,
        email,
        password,
        phone: phoneNumber,
      }).unwrap();

      setTitle("");
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setCountry("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");

      switchPage();
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
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl font-bold">
              Welcome To EMB E-Ticket Registration page
            </h1>
            <p className="text-balance text-muted-foreground">
              Register to your Ethiopian Midr Babur E-Ticket official account
            </p>
          </div>
          <ScrollArea className="h-64 w-full [&_div]:p-1 m-0">
            <div>
              <Label htmlFor="title">Title</Label>
              <Select value={title} onValueChange={(value) => setTitle(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a your Title" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Title</SelectLabel>
                    <SelectItem value="Mr">Mr.</SelectItem>
                    <SelectItem value="Miss">Miss.</SelectItem>
                    <SelectItem value="Mrs">Mrs.</SelectItem>
                    <SelectItem value="Ms">Ms.</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                name="first_name"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                ref={userRef}
              />
            </div>
            <div>
              <div className="grid gap-2">
                <Label htmlFor="middlename">Middle Name</Label>
                <Input
                  name="middle_name"
                  placeholder="Enter your middle name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  required
                  ref={userRef}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                name="last_name"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                ref={userRef}
              />
            </div>
            <div>
              <h4 className="text-pretty text-red-500 ">
                Title Your name must be entered in English as it appears on your
                passport.
              </h4>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarMonthIcon />
                    {date ? (
                      format(date, "PPP")
                    ) : (
                      <span>Pick your Birht Day</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => setDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dateOfBirth">Country</Label>
              <Select
                value={country}
                onValueChange={(value) => setCountry(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>COuntry</SelectLabel>
                    <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                    <SelectItem value="Djiubti">Djibuti</SelectItem>
                    <SelectItem value="Eritrea">Eritrea</SelectItem>
                    <SelectItem value="Somalia">Somalia</SelectItem>
                    <SelectItem value="Kenya">Kenya</SelectItem>
                    <SelectItem value="Sudan">Sudan</SelectItem>
                    <SelectItem value="South Sudan">South Sudan</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
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
                  className="ml-auto text-sm underline-offset-2 hover:underline text-red-500 "
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
                name="phone"
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
            If You have allready an account?{" "}
            <a onClick={switchPage} className="underline underline-offset-4">
              Back to Login
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
