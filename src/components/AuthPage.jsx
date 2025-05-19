import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./Login";
import Signup from "./Signup";

const AuthPage = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleToggle = () => {
        setIsSignup((prev) => !prev);
    };

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full p-6 gap-6">
            {/* Auth Form Panel */}
            <div className="flex flex-col items-center justify-center w-full max-w-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isSignup ? "signup" : "login"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full bg-white text-black p-8 rounded-xl shadow-lg"
                    >
                        {isSignup ? <Signup /> : <Login />}
                    </motion.div>
                </AnimatePresence>

                {/* Toggle Button */}
                <motion.button
                    onClick={handleToggle}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 text-sm text-indigo-600 hover:text-indigo-400 transition"
                >
                    {isSignup
                        ? "Already have an account?"
                        : "Don't have an account?"}{" "}
                    <span className="underline font-semibold">
                        {isSignup ? "Log In" : "Sign Up"}
                    </span>
                </motion.button>
            </div>
        </div>
    );
};

export default AuthPage;
