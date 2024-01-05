import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  FacebookIcon,
  GoogleIcon,
} from "@/icons";

const Login = () => {
  return (
    <div className="grid grid-cols-2 h-[100vh] w-full bg-slate-50">
      {/* left-image section */}
      <div className="bg-[url('/assets/loginbg.png')] bg-cover bg-center bg-no-repeat h-full">
        <div className="flex flex-col justify-between pt-[89.4px] pb-[89.6px] pl-10 pr-[54px] h-full">
          {/* logo */}
          <Image
            src="/assets/logo.png"
            width={262}
            height={77}
            alt="Dr.Broker"
          />
          {/* slider */}
          <div className="flex flex-col">
            <h2 className="text-white text-[32px] font-bold">
              Find Your Sweet Home!
            </h2>
            <p className="text-white text-2xl font-normal !leading-[35px] mt-4">
              “The house you looked at today and wanted to think about until
              tomorrow may be the same house someone looked at yesterday and
              will buy today.”
            </p>
            <div className="flex justify-between items-center mt-6">
              <p className="text-stone-50 text-xl font-medium">
                –Koki Adasi, Koki & Associates, Inc
              </p>
              {/* slider buttons */}
              <div className="flex items-center gap-[22px]">
                <button className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center">
                  <ChevronLeftIcon className="w-[30px] h-[30px] relative" />
                </button>
                <button className="w-[50px] h-[50px] rounded-full border border-white flex items-center justify-center">
                  <ChevronRightIcon className="w-[30px] h-[30px] relative" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* login form */}
      <div className="flex flex-col items-center bg-slate-50">
        <h5 className="text-neutral-800 text-[32px] font-bold mt-[140px]">
          Login
        </h5>
        {/* form */}
        <form className="w-[534px] mx-auto bg-slate-50">
          <div className="space-y-6 px-4">
            {/* email/username */}
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-neutral-800 text-sm font-normal block"
              >
                Email/Username <span className="text-[#EB2F2F]">*</span>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter email/username"
                className="px-4 py-[13.50px] rounded-md border border-zinc-400 w-full"
              />
            </div>
            {/* password */}
            <div className="space-y-1 relative">
              <label
                htmlFor="password"
                className="text-neutral-800 text-sm font-normal block text-left"
              >
                Password <span className="text-[#EB2F2F]">*</span>
              </label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Enter Password"
                className="px-4 py-[13.50px] rounded-md border border-zinc-400 w-full"
              />
              {/* eye icon */}
              <button className="absolute right-4 top-9">
                <EyeIcon />
              </button>
              {/* forgot password */}
              <button className="text-neutral-800 text-xs font-medium !leading-normal mt-4 w-full text-right">
                Forgot Password?
              </button>
            </div>
            {/* login button */}
            <button className="px-[30px] py-2.5 bg-blue-300 rounded-[10px] text-center text-neutral-800 text-base font-semibold !leading-normal w-full">
              Login
            </button>
          </div>
          {/* or signin */}
          <span className="block text-center text-zinc-800 text-sm font-normal font-['Mulish'] !leading-snug or-signin relative mx-auto mt-10">
            Or sign in with
          </span>
          {/* google/facebook buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button className="w-full py-[17px] bg-white rounded-[10px] shadow border border-stone-50 flex justify-center items-center gap-2 text-neutral-600 text-sm font-normal font-['Inter']">
              <GoogleIcon />
              Sign in with Google
            </button>
            <button className="w-full py-[17px] bg-white rounded-[10px] shadow border border-stone-50 flex justify-center items-center gap-2 text-neutral-600 text-sm font-normal font-['Inter']">
              <FacebookIcon />
              Sign in with Facebook
            </button>
          </div>
        </form>
        {/* signup */}
        <div className="flex items-center text-center mt-14  text-neutral-500 text-sm font-normal font-['Inter']">
          Don’t have an account?{" "}
          <button className="text-center text-red-400 text-sm font-semibold font-['Inter'] underline">
            Sign Up
          </button>
        </div>
        <Image
          src="/assets/formbg.png"
          width={656}
          height={267}
          alt="building"
          className="w-[756.94px] h-[381.72px] relative"
        />
      </div>
    </div>
  );
};

export default Login;
