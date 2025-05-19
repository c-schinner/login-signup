import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import FormInput from "../components/FormInput";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Signup Data:", data);
        // Add your signup logic here
    };

    return (
        <div className="bg-white px-10 py-12 rounded-3xl shadow-md w-full max-w-md">
            <h1 className="text-4xl font-bold text-center">Create Account</h1>
            <p className="text-gray-500 text-center mt-2">
                Join us by filling out the info below
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                <FormInput
                    label="Email"
                    placeholder="Enter your Email"
                    icon={MdEmail}
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: "Invalid email address",
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">
                        {errors.email.message}
                    </p>
                )}

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
                        minLength: {
                            value: 6,
                            message: "Minimum 6 characters",
                        },
                    })}
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">
                        {errors.password.message}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 transition text-white py-3 rounded-lg font-semibold"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;
