import React, { useRef, useState } from "react";
import axios from "axios";
import useForm from "../hooks/useForm";
import { SearchCircleIcon } from "@heroicons/react/solid";
import Select from "react-select";
import "react-dropdown/style.css";
import Head from "next/head";

const provincies = [
  { value: "Banten", label: "Banten" },
  { value: "bandung", label: "Bandung" },
  { value: "Bogor", label: "Bogor" },
  { value: "Jakarta", label: "Jakarta" },
  { value: "Semarang", label: "Semarang" },
  { value: "Yogyakarta", label: "Yogyakarta" },
  { value: "Surabaya", label: "Surabaya" },
];

function Register() {
  const [isChecked, setIsChecked] = useState(false);
  const [location, setLocation] = useState("");
  const [field, handleField] = useForm();
  const doRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/register", {
        ...field,
        isCompany: isChecked,
        location: location,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Head>
        <title>Register an Account</title>
      </Head>
      <div className="w-full background bg-cover filter min-h-screen">
        <div className="w-full flex justify-end place-items-center h-screen">
          <div className="px-8 overflow-y-auto md:px-12 flex flex-col pt-10 pb-20 md:h-screen md:w-1/3 border-gray-100 bg-white mt-64 md:mt-0 rounded-2xl rounded-bl-none md:rounded-bl-2xl md:rounded-tr-none rounded-br-none shadow-xl">
            <div className="flex text-center flex-col items-center text-gray-700 text-sm font-semibold mb-6">
              <SearchCircleIcon className="w-10 h-10 text-blue-500" />
              <p className="text-gray-500 text-xs font-medium">Job Hunter</p>
              <h1 className="mt-4 font-semibold text-xl mb-3">
                Register an Account
              </h1>
              <p className="text-xs font-normal text-gray-500 text-center mb-2">
                Register for FREE and get suitable jobs easily to apply.
              </p>
            </div>
            <form
              className="flex flex-col place-items-center"
              onSubmit={doRegister}
            >
              <div className="w-full flex justify-between space-x-2">
                <input
                  type="text"
                  onChange={handleField}
                  name="firstname"
                  placeholder="First Name"
                  required
                  className="bg-white outline-none border-gray-300 border-b mb-3 w-full text-xs py-3 px-4  "
                />
                <input
                  type="text"
                  onChange={handleField}
                  name="lastname"
                  placeholder="Last Name"
                  required
                  className="bg-white outline-none border-gray-300 border-b mb-3 w-full text-xs py-3 px-4  "
                />
              </div>
              <input
                type="text"
                onChange={handleField}
                name="username"
                placeholder="Username"
                required
                className="bg-white outline-none border-gray-300 border-b mb-3 w-full text-xs py-3 px-4  "
              />
              <input
                type="text"
                onChange={handleField}
                name="email"
                required
                placeholder="Email"
                className="bg-white outline-none border-gray-300 border-b mb-3 w-full text-xs py-3 px-4 "
              />
              <input
                type="password"
                onChange={handleField}
                name="password"
                required
                placeholder="Password"
                className="bg-white outline-none border-gray-300 border-b mb-5 w-full text-xs py-3 px-4 "
              />
              <div className="w-full mb-5 flex justify-between items-center">
                <div className="text-xs text-gray-700">
                  Register as company account
                </div>
                <label className="switch">
                  <input
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    type="checkbox"
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              {isChecked && (
                <div className="w-full duration-200">
                  <input
                    disabled={!isChecked}
                    type="text"
                    onChange={handleField}
                    name="company"
                    required
                    placeholder="Company Name"
                    className="bg-white disabled:cursor-not-allowed border-gray-300 outline-none border-b mb-5 w-full text-xs py-3 px-4"
                  />
                  <Select
                    placeholder="Company Location"
                    className="w-full mb-5 text-xs"
                    onChange={(e) => setLocation(e.value)}
                    options={provincies}
                  />
                </div>
              )}
              <p className="text-xs text-gray-500 text-center mb-4">
                By selecting register button, I have read and agree to
                Jobhunter.com's{" "}
                <span className="text-blue-500">terms of use</span> and{" "}
                <span className="text-blue-500">Privacy policy</span>
              </p>
              <div className="flex space-x-4 w-full">
                <button
                  type="submit"
                  className="py-2 text-center relative bottom-0 hover:bg-blue-600 duration-200 cursor-pointer text-white rounded-md text-sm w-1/2 bg-blue-500"
                >
                  Register
                </button>
                <div className="py-2 relative w-1/2 bottom-0 duration-200 cursor-pointer text-blue-500 rounded-md text-sm text-center border border-blue-500">
                  Login
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
