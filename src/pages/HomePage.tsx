// import { useEffect } from "react";
import Header from "../components/Landing/Header";
import Testimonials from "../components/Landing/Testimonials";
import Footer from "../components/Landing/Footer";
import Offer from "../components/Landing/Offer";
import CTASection from "../components/Landing/CTASection";
import Mission from "../components/Landing/Mission";
import GetStart from "../components/Landing/GetStart";
// import { useAppSelector, useAppDispatch } from "../store/hooks";
// import {
//   addUsers,
//   removeUser,
//   updateUser,
//   getUsers,
// } from "../store/slices/userSlice";
// import type { RootState } from "../store";

function Home() {
  // const userState = useAppSelector((state: RootState) => state.userSlice);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  // dispatch(getUsers())
  // }, [userState?.users])

  return (
    <div className="dark:bg-[#fbf8f1] font-sans">
      <Header />
      <GetStart />
      <Mission />
      <Offer />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Home;
