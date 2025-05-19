import React from "react";

const FormInput = ({ label, icon: Icon, ...props }) => {
    return (
        <div className="mb-5">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
                {Icon && <Icon className="text-gray-500" />} {label}
            </label>
            <input
                {...props}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all bg-white"
            />
        </div>
    );
};

export default FormInput;
