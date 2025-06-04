import { type UseFormRegister } from "react-hook-form";

export const TextField = ({
  label,
  type = "text",
  placeholder = "",
  value,
  className = "",
  register,
  required = false
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  register?: ReturnType<UseFormRegister<any>>;
  required?: boolean;
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-left flex gap-2">{label} { required == true ? <div className="text-red-500">*</div> : <></>} </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        {...(register ?? {})}
        className="border-2 border-solid p-2 rounded"
      />
    </div>
  );
};
