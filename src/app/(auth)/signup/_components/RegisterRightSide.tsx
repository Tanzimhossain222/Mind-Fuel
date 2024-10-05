"use client";

import { registerAction } from "@/app/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

// Define the schema for validation using Zod
const schema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().nonempty("Phone number is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .nonempty("Password is required"),
  address: z.string().nonempty("Address is required"),
  city: z.string().nonempty("City is required"),
  zip: z.string().nonempty("ZIP code is required"),
});

// Define the form input types based on the Zod schema
type FormData = z.infer<typeof schema>;

const RegisterRightSide: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [checked, setChecked] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string>("");

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (checked) {
      try {
        await registerAction(data);
        setSuccessMsg("Registration successful! Please sign in.");
        reset(); // Reset the form after successful submission
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  };

  return (
    <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
      {successMsg ? (
        <div className="w-[500px]">
          <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
            {successMsg}
          </p>
          <Link href="/signin">
            <button
              className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
              tracking-wide hover:bg-black hover:text-white duration-300"
            >
              Sign in
            </button>
          </Link>
        </div>
      ) : (
        <form
          className="w-full h-screen flex items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="px-6 py-4 w-full h-[96%] flex flex-col justify-start overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
              Create your account
            </h1>
            <div className="flex flex-col gap-3">
              {/* First Name */}
              <div className="flex flex-col gap-0.5">
                <label className="font-titleFont text-base font-semibold text-gray-600">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  placeholder="Your first name"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-0.5">
                <label className="font-titleFont text-base font-semibold text-gray-600">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  placeholder="Your last name"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              {/* Email */}
              <div className="flex flex-col gap-0.5">
                <label className="font-titleFont text-base font-semibold text-gray-600">
                  Email
                </label>
                <input
                  {...register("email")}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  placeholder="john@workemail.com"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-0.5">
                <label className="font-titleFont text-base font-semibold text-gray-600">
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errors.phone.message}
                  </p>
                )}
              </div>
              {/* Password */}
              <div className="flex flex-col gap-0.5">
                <label className="font-titleFont text-base font-semibold text-gray-600">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  placeholder="Create a password"
                />
                {errors.password && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/* Address */}
              <div className="flex flex-col gap-0.5">
                <label className="font-titleFont text-base font-semibold text-gray-600">
                  Address
                </label>
                <input
                  {...register("address")}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  placeholder="Your address"
                />
                {errors.address && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errors.address.message}
                  </p>
                )}
              </div>
              {/* City */}
              <div className="flex flex-col gap-0.5">
                <label className="font-titleFont text-base font-semibold text-gray-600">
                  City
                </label>
                <input
                  {...register("city")}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  placeholder="Your city"
                />
                {errors.city && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errors.city.message}
                  </p>
                )}
              </div>
              {/* ZIP Code */}
              <div className="flex flex-col gap-0.5">
                <label className="font-titleFont text-base font-semibold text-gray-600">
                  ZIP Code
                </label>
                <input
                  {...register("zip")}
                  className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                  placeholder="Your ZIP code"
                />
                {errors.zip && (
                  <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                    <span className="font-bold italic mr-1">!</span>
                    {errors.zip.message}
                  </p>
                )}
              </div>
              {/* Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="terms-checkbox"
                  className="h-4 w-4"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label
                  htmlFor="terms-checkbox"
                  className="font-titleFont text-base font-semibold text-gray-600"
                >
                  I agree to the Terms & Conditions
                </label>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full h-10 mt-4 bg-primeColor text-white text-base font-titleFont font-semibold 
                tracking-wide rounded-md hover:bg-black transition-colors ${
                  !checked ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={!checked}
              >
                Register
              </button>

              <p className="text-sm text-center font-titleFont font-medium">
                Already have an Account?{" "}
                <Link href="/signin">
                  <span className="hover:text-blue-600 duration-300">
                    Sign in
                  </span>
                </Link>
              </p>


            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegisterRightSide;
