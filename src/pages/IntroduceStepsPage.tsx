import Header from "../components/Landing/Header";
import IntroduceSteps from "../components/Landing/IntroduceSteps";
import Footer from "../components/Landing/Footer";
import { useAppSelector } from "../store/hooks";

function IntroduceStepsPage() {
  const layout = useAppSelector((state) => state.adminLayoutSlice.layout);
  return (
    <div className="dark:bg-[#fbf8f1] font-sans">
      <Header showLoginButton={layout.showLoginButton} />
      <IntroduceSteps />
      <Footer />
    </div>
  );
}

export default IntroduceStepsPage;
