import { motion } from "framer-motion";
import AuthPage from "./components/AuthPage";
import illustration from "./assets/undraw_programmer_raqr.svg";

function App() {
    return (
        <div className="flex w-full h-screen bg-gray-100 text-black font-sans overflow-hidden relative">
            <div className="flex-1 flex items-center justify-center">
                <AuthPage />
            </div>

            {/* Right Panel with Floating Image */}
            <div className="hidden lg:flex w-1/2 h-full items-center justify-center relative overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-700">
                <motion.img
                    src={illustration}
                    alt="Welcome"
                    className="max-w-sm w-full h-auto object-contain z-10"
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut",
                    }}
                />

                {/* Optional gradient fade at bottom */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
        </div>
    );
}

export default App;
