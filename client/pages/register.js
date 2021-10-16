import React, { useState } from "react";
import axios from "axios";
import { useForm } from "../utils/hooks/form";

function Register() {
  const [field, handleField] = useForm();
  const doRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/register", field)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full bg-black min-h-screen">
      <div className="absolute top-0 bg-black bg-opacity-80 h-screen w-full z-10"></div>
      <img
        className="w-full h-screen object-cover"
        src="https://i.ibb.co/3RZX1d2/bgcok-clear.png"
        alt="bg"
      />
      <div className="w-full absolute top-0 z-20 flex justify-center place-items-center h-screen">
        <div className="px-12 w-96 py-10 bg-cusgray rounded-xl">
          <img src="big_logo.svg" className="mx-auto mb-6" alt="" />
          <form
            className="flex flex-col place-items-center text-white"
            onSubmit={doRegister}
          >
            <input
              type="text"
              onChange={handleField}
              name="username"
              placeholder="Username"
              required
              className="bg-lghtgray mb-3 w-full text-xs py-3 px-4 rounded-md "
            />
            <input
              type="text"
              onChange={handleField}
              name="email"
              required
              placeholder="Email"
              className="bg-lghtgray mb-3 w-full text-xs py-3 px-4 rounded-md"
            />
            <input
              type="password"
              onChange={handleField}
              name="password"
              required
              placeholder="Password"
              className="bg-lghtgray mb-7 w-full text-xs py-3 px-4 rounded-md"
            />
            <div className="flex space-x-4 w-full">
              <button
                type="submit"
                className="py-2 text-center relative bottom-0 hover:bg-green duration-200 cursor-pointer text-black rounded-md text-sm font-medium w-1/2 bg-lghtgreen"
              >
                Register
              </button>
              <div className="py-2 relative w-1/2 bottom-0 hover:border-green duration-200 cursor-pointer text-white rounded-md text-sm font-medium text-center border border-lghtgreen">
                Login
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
