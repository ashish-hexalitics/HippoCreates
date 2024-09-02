import React, { useState } from "react";
import business3dYoungWomenStanding from "../../assets/images/business-3d-young-women-standing.png";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../store/slices/userSlice/apiSlice";
import toast, { Toaster } from 'react-hot-toast';

interface RegisterRequest {
  email: string;
  password: string;
  name: string;
  role: string;
}

const Register: React.FC = (): React.ReactElement => {
  const [user, setUser] = useState<RegisterRequest>({
    email: "",
    password: "",
    name: "",
    role: "utilizer",
  });
  const navigate = useNavigate();
  const notify = (message: string) => toast(message);

  const [register, { isError, data }] = useRegisterMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const userCredentials: RegisterRequest = user;
      const response = await register(userCredentials).unwrap();
      if (response.user) {
        !isError && navigate("/login");
        notify(data.message);
      }
    } catch (error:any) {
      console.log(error)
      notify(error.data.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6 dark:bg-[#fbf8f1]">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-lg bg-[#fbf8f1] shadow-lg dark:bg-white">
        <div className="w-full p-8 sm:p-12 lg:w-1/2">
          <h2 className="mb-4 text-2xl font-bold text-left text-gray dark:text-gray">
            Register
          </h2>
          <Toaster/>
          <form>
            <div className="relative mb-6">
              <input
                type="email"
                className="peer block w-full rounded border-0 bg-gray-500 px-4 py-3 text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400"
                id="exampleInputEmail"
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
              <label
                htmlFor="exampleInputEmail"
                className="pointer-events-none absolute left-4 top-0 mb-0 pt-3 leading-6 text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-gray-400"
              >
                Email
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="text"
                className="peer block w-full rounded border-0 bg-gray-500 px-4 py-3 text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400"
                id="exampleInputFullName"
                placeholder="Enter Full Name"
                onChange={handleChange}
                name="name"
              />
              <label
                htmlFor="exampleInputFullName"
                className="pointer-events-none absolute left-4 top-0 mb-0 pt-3 leading-6 text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-gray-400"
              >
                Full Name
              </label>
            </div>
            <div className="relative mb-6">
              <input
                type="password"
                className="peer block w-full rounded border-0 bg-gray-100 px-4 py-3 text-gray-700 placeholder-gray-500 focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400"
                id="exampleInputPassword"
                placeholder="Password"
                onChange={handleChange}
                name="password"
              />
              <label
                htmlFor="exampleInputPassword"
                className="pointer-events-none absolute left-4 top-0 mb-0 pt-3 leading-6 text-gray-500 transition-all duration-200 ease-out peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary dark:text-gray-400"
              >
                Password
              </label>
            </div>
            <div className="mb-6">
              <label className="block text-gray-600 dark:text-gray-500">
                Why Are You Here ?.
              </label>
              <div className="flex flex-col space-y-4 mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="role"
                    value={"designer"}
                    checked={user.role === "designer"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">To Design The Template</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="role"
                    value={"utilizer"}
                    checked={user.role === "utilizer"}
                    onChange={handleChange}
                  />
                  <span className="ml-2">To Utilize The Template</span>
                </label>
              </div>
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded dark:border-gray-600"
                  id="checkboxDefault"
                />
                <label
                  htmlFor="checkboxDefault"
                  className="ml-2 text-gray-600 dark:text-gray-500"
                >
                  Remember me
                </label>
              </div>
              <Link to="/login">Login</Link>
            </div>
            <button
              type="submit"
              onClick={handleRegister}
              className="w-full rounded bg-[#55bab9] py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-dark focus:bg-primary-dark focus:outline-none dark:bg-[#55bab9] dark:hover:bg-primary"
            >
              Register Now
            </button>
            <div className="mt-4 text-center text-gray-500 dark:text-gray-500">
              or Register with
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              <button
                type="button"
                className="flex items-center justify-center w-1/2 rounded bg-white border border-gray-300 py-2.5 text-xs font-medium uppercase leading-normal text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-gray-100 dark:hover:text-white dark:hover:bg-[#55bab9]"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_2013_Google.png/600px-Logo_2013_Google.png"
                  alt="Google"
                  className="mr-2 w-5"
                />
                Google
              </button>
              <button
                type="button"
                className="flex items-center justify-center w-1/2 rounded bg-white border border-gray-300 py-2.5 text-xs font-medium uppercase leading-normal text-gray-700 shadow-md transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:bg-gray-100 dark:hover:text-white dark:hover:bg-[#55bab9]"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
                  alt="Facebook"
                  className="mr-2 w-5"
                />
                Facebook
              </button>
            </div>
          </form>
        </div>
        <div className="hidden p-16 w-1/2 lg:block">
          <div
            className="w-full h-full bg-cover bg-top lg:block"
            style={{
              backgroundImage: `url(${business3dYoungWomenStanding})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
