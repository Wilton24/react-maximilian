import { forwardRef, Ref, useImperativeHandle, useRef } from "react";

interface InputFieldProps {
  type: string;
  className?: string;
  placeholder?: string;
  label?: string;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
};

type ImperativeHandle = {
  sample: () => void
}

const defaultClassname: string = 
  "flex-1 p-2 min-w-[100px] w-full max-w-[400px] mb-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ type, className, placeholder, label, onInput, ...etc }, ref: Ref<HTMLInputElement | any>) => {

    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, ()=>{
      return {
        sample: ()=>{
          console.log('Hello Tryeal');
        }
      }
    },[]);

    return (
      <>
        {label && <h2 className="text-2xl">{label}</h2>}
        <input
          type={type}
          placeholder={placeholder}
          className={className || defaultClassname}
          ref={inputRef}
          {...etc}
          onChange={()=> onInput}
        />
      </>
    );
  }
);

export default InputField;
