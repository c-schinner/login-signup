import React from "react";
import { useForm } from "react-hook-form";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import FormInput from "../components/FormInput";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Login Data:", data);
        // Add your auth logic here
    };

    return (
        <div className="bg-white px-10 py-12 rounded-3xl shadow-md w-full max-w-md">
            <h1 className="text-4xl font-bold text-center">Welcome Back</h1>
            <p className="text-gray-500 text-center mt-2">
                Enter your login details below
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <FormInput
                    label="Username"
                    placeholder="Enter your Username"
                    icon={FaRegUser}
                    {...register("username", {
                        required: "Username is required",
                    })}
                />
                {errors.username && (
                    <p className="text-red-500 text-sm">
                        {errors.username.message}
                    </p>
                )}

                <FormInput
                    label="Password"
                    type="password"
                    placeholder="Enter your Password"
                    icon={RiLockPasswordLine}
                    {...register("password", {
                        required: "Password is required",
                    })}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">
                        {errors.password.message}
                    </p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-600">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            className="mr-2 accent-blue-500"
                        />
                        Remember me
                    </label>
                    <button
                        type="button"
                        className="text-blue-500 hover:underline"
                    >
                        Forgot password?
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-lg font-semibold"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default Login;
