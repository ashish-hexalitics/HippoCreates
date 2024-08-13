import Modal from "../Common/Modal";
interface IProfileModalProps {
  isOpen: boolean;
  handleSubmit: (e: React.MouseEvent) => void;
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleModal: () => void;
  userData: any;
  isModalOpen: boolean;
}
const ProfileModal: React.FC<IProfileModalProps>=({
  userData,
  handleInputChange,
  isModalOpen,
  toggleModal,
  handleSubmit,
})=> {
  return (
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
  );
}

export default ProfileModal;
