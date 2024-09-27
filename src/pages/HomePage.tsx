import { useEffect,useState } from "react";
import Header from "../components/Landing/Header";
import Testimonials from "../components/Landing/Testimonials";
import Footer from "../components/Landing/Footer";
import Offer from "../components/Landing/Offer";
import CTASection from "../components/Landing/CTASection";
import Mission from "../components/Landing/Mission";
import GetStart from "../components/Landing/GetStart";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useAppSelector } from "../store/hooks";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  let animateCircleFragment = document.createDocumentFragment();
  // const state = useAppSelector((state) => state);

  function animateCircle(event: MouseEvent) {
    let circleDivElem: HTMLElement = document.createElement("div");
    circleDivElem.classList.add("circle");

    animateCircleFragment.appendChild(circleDivElem);
    document.body.appendChild(animateCircleFragment);

    circleDivElem.style.left = event.clientX + "px";
    circleDivElem.style.top = event.clientY + "px";

    setTimeout(() => {
      circleDivElem.style.transform = "scale(2)";
      circleDivElem.style.opacity = "0";
    }, 50);

    setTimeout(() => {
      circleDivElem.remove();
    }, 800);
  }

  const [showLoginButton, setShowLoginButton] = useState<boolean>(true)
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section:any) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });
  }, []);
  
  useEffect(() => {
    setShowLoginButton(localStorage.getItem("access_token") ?false:true)
    document.addEventListener("mousemove", animateCircle);
    return () => {
      document.removeEventListener("mousemove", animateCircle);
    };
  }, []);

  return (
    <div
      className="dark:bg-[#fbf8f1] font-sans relative"
      id="homePage"
      style={{ scrollBehavior: "smooth" }}
    >
      <Header showLoginButton={showLoginButton} />
      <GetStart />
      <Offer />
      <Mission />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default Home;
