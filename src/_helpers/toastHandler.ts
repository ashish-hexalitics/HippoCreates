import toast from "react-hot-toast";

interface ToastHandlerMessage {
  message: string | string[];
}
const toastHandler = (message: ToastHandlerMessage) => {
  if (Array.isArray(message) && message.length > 0) {
    message.map((msg) => toast.success(msg));
  } else if (typeof message === "string") {
    toast.success(message);
  } else {
    toast.error("An error occurred. Please try again later.");
  }
  return true;
};

export default toastHandler;
