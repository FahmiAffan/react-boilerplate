import { useForm } from "react-hook-form";
import { TextField } from "../../components/input/text-field";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "../../components/button/Button";
import { type LoginFormData } from "./Interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./AuthSchema";
import api from "../../lib/axios";

interface IFormInput {
  hahNumber: string;
  password: string;
  confirm_password?: string;
}

export const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema), // Integrasi Zod di sini
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    try {
      api.post('/api/auth/login', data).then((res) => {
        console.log(res);
        reset();
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-[448px] border-2 border-solid p-8 rounded-lg shadow-md">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-left">Login</h1>
          <p className="text-sm text-gray-500 text-left">
            Please enter your credentials to login.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <TextField
            required
            register={register("hahNumber")}
            label="hahNumber"
          />
          {errors.hahNumber && <p>This Field Required</p>}
          <TextField
            required
            register={register("password")}
            label="Password"
            type="password"
          />
        </div>

        {/* <button type="submit">Login</button> */}
        <Button label="Login" type="submit" className="w-full" />
      </form>
    </div>
  );
};

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    try {
      const result = fetch("http://localhost:4000/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      result
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          toast.success("Login successful!");
          return response.json();
        })
        .catch((error) => {
          toast.error("Login Failed!");
          throw new Error(`Fetch error: ${error.message}`);
        });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-[448px] border-2 border-solid p-8 rounded-lg shadow-md">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-left">Register</h1>
          <p className="text-sm text-gray-500 text-left">
            Please enter your credentials to Register.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <TextField
            required
            register={register("hahNumber")}
            label="hahNumber"
          />
          <TextField
            required
            register={register("password")}
            label="Password"
            type="password"
          />
          <TextField
            required
            register={register("confirm_password")}
            label="Confirm Password"
            type="password"
          />
        </div>

        {/* <button type="submit">Login</button> */}
        <Button label="Login" type="submit" className="w-full" />
      </form>
    </div>
  );
};
