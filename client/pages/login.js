import axios from "axios";
import React from "react";
import useForm from "../hooks/useForm";
import { useRouter } from "next/router";
import nookies from "nookies";
import { SearchCircleIcon } from "@heroicons/react/solid";
import "react-dropdown/style.css";

function Login() {
  const [field, handleField] = useForm();
  const router = useRouter();
  const doLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", field)
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(res.data));
          nookies.set(null, "token", res.data.accessToken);
          router.push("/find");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full background bg-cover filter min-h-screen">
      <div className="w-full flex justify-end place-items-end h-screen">
        <div className="px-8 md:px-12 border flex flex-col py-10 md:py-20 md:min-h-screen md:w-1/3 border-gray-100 bg-white md:mt-0 rounded-2xl rounded-bl-none md:rounded-bl-2xl md:rounded-tr-none rounded-br-none shadow-xl">
          <div className="flex text-center flex-col items-center text-gray-700 text-sm font-semibold mb-6">
            <SearchCircleIcon className="w-10 h-10 text-blue-500" />
            <p className="text-gray-500 text-xs font-medium">Job Hunter</p>
            <h1 className="mt-4 font-semibold text-xl">Candidate Login</h1>
          </div>
          <form className="flex flex-col place-items-center" onSubmit={doLogin}>
            <input
              type="text"
              onChange={handleField}
              name="username"
              placeholder="Username"
              required
              className="bg-white outline-none border-gray-300 border-b mb-3 w-full text-xs py-3 px-4  "
            />
            <input
              type="password"
              onChange={handleField}
              name="password"
              required
              placeholder="Password"
              className="bg-white outline-none border-gray-300 border-b mb-5 w-full text-xs py-3 px-4 "
            />
            <p className="text-xs text-gray-500 text-center mb-3">
              By signing in to your account, you agree to Jobhunter's{" "}
              <span className="text-blue-500">Terms of Service </span>and{" "}
              <span className="text-blue-500">Privacy Policy.</span>
            </p>
            <button
              type="submit"
              className="py-2 text-center relative bottom-0 hover:bg-blue-600 duration-200 cursor-pointer text-white mb-4 rounded-md text-sm w-full bg-blue-500"
            >
              Login
            </button>
            <p className="text-xs text-gray-500 text-center mb-4">
              New to jobhunter? Create an account{" "}
              <span className="text-blue-500">here</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
