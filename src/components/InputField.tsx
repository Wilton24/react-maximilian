import { forwardRef, Ref } from "react";

interface InputFieldProps {
  type: string;
  className?: string;
  placeholder?: string;
  label?: string;
}

const defaultClassname: string = 
  "flex-1 p-2 min-w-[100px] w-full max-w-[400px] mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, className, placeholder, label, ...tanan }, ref) => {
    return (
      <>
        {label && <h2 className="text-2xl">{label}</h2>}
        <input
          type={type}
          placeholder={placeholder}
          className={className || defaultClassname}
          ref={ref}
          {...tanan}
        />
      </>
    );
  }
);

export default InputField;
