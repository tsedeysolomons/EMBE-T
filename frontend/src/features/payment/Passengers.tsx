"use client";

import { type FormEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
} from "../../components/ui/collapsible";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../hooks/use-toast";
import { selectCurrentToken } from "../auth/login/authSlice";
import { useSelector } from "react-redux";
import { useRegisterGustMutation } from "./bookApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "./bookSlice";

interface PassengerDetailsProps {
  handleNext: (step: number) => void;
}

function PassengerDetails({ handleNext }: PassengerDetailsProps) {
  const [isFrequentTrainOpen, setIsFrequentFlyerOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [frequentTrainProgram, setFrequentTrainProgram] = useState("");
  const [membershipNumber, setMembershipNumber] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerGust, { isLoading }] = useRegisterGustMutation();
  const { toast } = useToast();

  const token = useSelector(selectCurrentToken);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await registerGust({
        type: "GUEST",
        title,
        firstName,
        middleName,
        lastName,
        dateOfBirth: new Date().toISOString(),
        country,
        email,
        phone: mobileNumber,
      }).unwrap();

      if (result) {
        console.log(result);
        dispatch(
          setUser({
            user: {
              ...result?.user,
            },
          })
        );

        handleNext(2);

        // Reset form fields
        setTitle("");
        setFirstName("");
        setLastName("");
        setMiddleName("");
        setCountry("");
        setEmail("");
        setMobileNumber("");
      }
    } catch (err: any) {
      console.error("Error submitting form:", err);
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (err?.status === 400) {
        errorMessage = "Missing required fields. Please check your input.";
      } else if (err?.status === 401) {
        errorMessage = "Unauthorized. Please log in and try again.";
      } else if (err?.data && err?.data.message) {
        errorMessage = err?.data.message;
      }

      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Passenger Details</CardTitle>
          <CardDescription>
            Names must exactly match passport details or National ID details and
            should be entered using English characters only. They can&apos;t be
            changed after your booking is complete.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Passenger Details */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="col-span-2 md:col-span-1">
                <Select value={title} onValueChange={setTitle}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mr">Mr</SelectItem>
                    <SelectItem value="mrs">Mrs</SelectItem>
                    <SelectItem value="ms">Ms</SelectItem>
                    <SelectItem value="dr">Dr</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-2 grid gap-6 md:grid-cols-2">
                <Input
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                  placeholder="Middle name"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
                <Input
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* Frequent Flyer Section */}
            <Collapsible
              open={isFrequentTrainOpen}
              onOpenChange={setIsFrequentFlyerOpen}
              className="border rounded-md px-4"
            >
              <CollapsibleContent className="pb-4 space-y-4">
                <Select
                  value={frequentTrainProgram}
                  onValueChange={setFrequentTrainProgram}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Trainline program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ethiopian">
                      Ethiopian Midr Babur
                    </SelectItem>
                    <SelectItem value="Djibuti">Djibuti Railway</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Membership number"
                  value={membershipNumber}
                  onChange={(e) => setMembershipNumber(e.target.value)}
                />
              </CollapsibleContent>
            </Collapsible>

            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact details</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Country/territory" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="et">Ethiopia</SelectItem>
                    <SelectItem value="dj">Djibouti</SelectItem>
                    <SelectItem value="er">Eritrea</SelectItem>
                    <SelectItem value="so">Somalia</SelectItem>
                    <SelectItem value="ke">Kenya</SelectItem>
                    <SelectItem value="sd">Sudan</SelectItem>
                    <SelectItem value="ss">South Sudan</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Mobile number"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <Input
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                variant="outline"
                onClick={() => navigate("/TrainAvalability")}
              >
                Return to Trains
              </Button>
              <Button
                className="bg-red-600 hover:bg-red-800"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Continue to Options"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default PassengerDetails;
