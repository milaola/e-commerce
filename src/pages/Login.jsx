import { useState } from "react";

import {useLocation,useNavigate,} from "react-router-dom";

import {Card,CardContent,} from "@/components/ui/card";

import {Input,} from "@/components/ui/input";

import {Button,} from "@/components/ui/button";

import {useAuth,} from "../context/AuthContext";

const Login = () => {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const { login } =
    useAuth();

  const navigate =
    useNavigate();

  const location =
    useLocation();

  const from =
    location.state?.from
      ?.pathname || "/";

  const handleSubmit = (
    event
  ) => {

    event.preventDefault();

    setError("");

    
    if (
      !email.trim() ||
      !password.trim()
    ) {

      setError(
        "Please enter your email and password."
      );

      return;
    }

    const result =
      login(
        email,
        password
      );

    if (!result.success) {

      setError(
        result.message
      );

      return;
    }

    navigate(from, {
      replace: true,
    });
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">

      <Card className="w-full max-w-md">

        <CardContent className="p-8">

          <h1 className="text-3xl font-bold">
            Login
          </h1>

          {error && (
            <div className="mt-4 rounded-md bg-red-50 p-3 text-red-600">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-6 space-y-5"
          >

            <div>

              <label className="mb-2 block">
                Email
              </label>

              <Input
                type="email"
                value={email}
                placeholder="you@example.com"
                onChange={(event) =>
                  setEmail(
                    event.target.value
                  )
                }
              />

            </div>

            <div>

              <label className="mb-2 block">
                Password
              </label>

              <Input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(event) =>
                  setPassword(
                    event.target.value
                  )
                }
              />

            </div>

            <Button
              type="submit"
              className="w-full"
            >
              Login
            </Button>

          </form>

        </CardContent>

      </Card>

    </main>
  )
}

export default Login
