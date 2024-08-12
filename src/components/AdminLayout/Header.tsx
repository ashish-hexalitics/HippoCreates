import { useEffect, useState } from "react";
import Modal from "../Common/Modal";
import {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
} from "../../store/slices/userSlice/apiSlice";
import { getUserInfo } from "../../store/slices/userSlice/userSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

interface IUserInfo {
  address: string;
  phone: string;
  website: string;
  gender: string;
  description: string;
  title: string;
}

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userPersist = JSON.parse(localStorage.getItem("user") || "{}");
  const [userData, setUserData] = useState<IUserInfo>({
    address: "",
    phone: "",
    website: "",
    gender: "",
    description: "",
    title: "",
  });
  const { data } = useGetUserInfoQuery(userPersist?.user?._id, {
    skip: !userPersist?.user?._id,
  });
  const [updateUserInfo] = useUpdateUserInfoMutation();

  const dispatch = useAppDispatch();
  const { userInfo } = useAppSelector((state) => state.userSlice);

  useEffect(() => {
    if (data) {
      dispatch(getUserInfo(data.userInfo));
      setUserData(data.userInfo);
    }
  }, [data, dispatch]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(updateUserInfo({ ...userInfo, ...userData }));
    toggleModal();
  };

  return (
    <header className="bg-[#3f9997] h-[70px] text-white shadow-md">
      <div className="w-full mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h2 className="font-bold text-white text-xl">HippoCreates</h2>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gray-800 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3f9997] focus:ring-white">
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.618V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.618c0 .386-.152.735-.405 1.012L4 17h5m2 1a2 2 0 11-4 0h4z"
                  />
                </svg>
              </button>
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={toggleModal}
                    className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3f9997] focus:ring-white"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                      alt="User avatar"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#3f9997] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#3f9997] focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-[#3f9997]" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </a>
          <a
            href="/users"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Users
          </a>
          <a
            href="/settings"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Settings
          </a>
          <a
            href="/reports"
            className="text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Reports
          </a>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={toggleModal}
        handlSave={handleSubmit}
        title="User Profile"
      >
        <div>
          {[
            { name: "address", label: "Address", value: userData.address },
            { name: "phone", label: "Phone", value: userData.phone },
            { name: "website", label: "Website", value: userData.website },
            { name: "gender", label: "Gender", value: userData.gender },
            {
              name: "description",
              label: "Description",
              value: userData.description,
            },
            { name: "title", label: "Title", value: userData.title },
          ].map(({ name, label, value }) => (
            <div key={name} className="relative mb-6">
              <input
                type="text"
                name={name}
                value={value}
                onChange={handleInputChange}
                className="peer block w-full rounded border-0 bg-gray-500 px-4 py-3 text-gray-700 placeholder-transparent focus:bg-white focus:outline-none dark:bg-gray-100 dark:text-gray dark:placeholder-gray-400"
                placeholder={label}
              />
              <label
                htmlFor={`exampleInput${label}`}
                className={`pointer-events-none absolute left-2 top-0 mb-0 pt-3 leading-6 text-transparent transition-all duration-200 ease-out transform ${
                  value
                    ? "-translate-y-6 scale-75 text-gray-500"
                    : "peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                } peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-transparent dark:text-gray-400`}
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </Modal>
    </header>
  );
}

export default Header;
