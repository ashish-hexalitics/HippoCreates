import { useEffect } from "react";

function Offer() {

  function createRipple(event: MouseEvent) {
    const targetElement = event.currentTarget as HTMLElement;
    const ripple = document.createElement("span");

    const rect = targetElement.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    ripple.classList.add("ripple");

    targetElement.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600); // Ripple duration
  }

  useEffect(() => {
    const elements = document.querySelectorAll(".ripple-effect");
    elements.forEach((el:any) => {
      el.addEventListener("mouseenter", createRipple);
    });

    return () => {
      elements.forEach((el:any) => {
        el.removeEventListener("mouseenter", createRipple);
      });
    };
  }, []);

  return (
    <section className="section flex-col justify-center items-center dark:bg-[#fbf8f1]">
      <div className="text-center">
        <h2 className="font-extrabold text-gray-700 text-6xl animate-[fade-in-down_1s_ease-in-out] ">
          What We Offer
        </h2>
        <p className="mt-3 text-gray-700 text-lg font-medium font-sans">
          We provide an extensive range of resume-building services designed to
          <br />
          cater to your unique career goals.
        </p>
      </div>
      <div className="grid grid-cols-2 mt-2 p-12">
        <div className="py-12 border-r-2 border-dashed border-gray-300">
          <div className="p-12 border-b-2 border-dashed border-gray-300 text-right">
            <p className="m-4 text-gray-700 text-md font-medium font-sans text-right ripple-effect">
              Diverse Templates: Choose from a wide variety of free and premium
              resume templates tailored to different industries and experience
              levels.
            </p>
          </div>
          <div className="p-12">
            <p className="m-4 text-gray-700 text-md font-medium font-sans text-right ripple-effect">
              Customizable Categories: Whether you’re entry-level, a seasoned
              professional, or anything in between, our categories include:
              Custom, Entry-Level, Industry-Specific, Professional, Creative,
              Technical Academic & Research, Senior-Level ,Freelance &
              Consulting, Government & Public Sector
            </p>
          </div>
        </div>
        <div className="py-12">
          <div className="p-12 border-b-2 border-dashed border-gray-300">
            <p className="m-4 text-gray-700 text-md font-medium font-sans ripple-effect">
              30-Day Free Trial: Explore all the features of our platform
              risk-free with a 30-day trial.
            </p>
          </div>
          <div className="p-12">
            <p className="m-4 text-gray-700 text-md font-medium font-sans ripple-effect">
              Affordable Options: Access high-quality templates at a fraction of
              the cost of other services. <br />
              Earn with Your Creativity: Create your own resume templates and
              earn profits whenever another user purchases and uses your design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
