import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";

// import required modules
import { EffectCards } from "swiper/modules";

const reviews = [
  {
    content: `"HippoCreates made building my resume incredibly easy! The platform offers a wide range of professional and creative templates that are both visually stunning and customizable. I was able to tailor my resume to fit the specific job I was applying for, and the step-by-step process guided me effortlessly through the entire experience."`,
    image: "https://via.placeholder.com/40",
    name: "Sarah M., Marketing Manager",
  },
  {
    content: `"It’s like having a personal career coach! Within a week of sending out my new resume, I started getting interview requests. The clean, polished design helped me stand out from other applicants, and I truly believe it made a big difference. Plus, the 30-day free trial was a great opportunity to explore all the features without any risk. Thank you, HippoCreates, for helping me build a resume that reflects my skills and experience perfectly!"`,
    image: "https://via.placeholder.com/40",
    name: "Sarah M., Marketing Manager",
  },
  {
    content: `"I’ve always struggled to find a resume template that strikes the right balance between creativity and professionalism. With HippoCreates, I found a template that allowed me to express my creative side while still maintaining a clean and polished look. The customization options were so easy to use, and I loved how I could personalize everything from fonts to layout. This platform truly stands out because it lets you build a resume that fits your style and industry. I even earned money by creating my own templates for others to use, which was an unexpected bonus. Highly recommended for anyone who wants a resume that gets noticed."`,
    image: "https://via.placeholder.com/40",
    name: "Jason R., Freelance Graphic Designer",
  },
  {
    content: `"HippoCreates took the stress out of resume building! The user-friendly interface, paired with its wide selection of templates, made the entire process quick and easy. I particularly appreciated how I could tailor the sections to fit my unique experiences, and the helpful tips along the way made me feel confident that my resume was professional and competitive. Thanks to HippoCreates, I landed my dream job within a month of updating my resume! I can’t recommend this platform enough to anyone looking to revamp their resume in an organized, creative, and efficient way."`,
    image: "https://via.placeholder.com/40",
    name: "Emma W., Software Engineer",
  },
];
// Testimonials Component
function Testimonials() {
  return (
    <section className="section flex flex-col justify-center items-center dark:bg-[#fbf8f1]">
      {/* Testimonials Section */}
      <div className="w-2/3 text-center">
        <h2 className="font-extrabold text-gray-700 text-4xl lg:text-6xl md:text-6xl sm:text-4xl mt-28 animate-[fade-in-down_1s_ease-in-out]">
          Testimonials
        </h2>
        <p className="mt-3 text-gray-700 text-lg font-medium font-sans">
          See what our happy customers have to say about us.
          <br /> Our services have transformed lives for the better.
        </p>
      </div>
      <div className="flex justify-center space-x-8 p-8 relative">
        <div className="glow-div absolute bottom-40"></div>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide>
              <ReviewCard
                key={index}
                content={review.content}
                image={review.image}
                name={review.name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

// ReviewCard Component with "Read More" Logic
function ReviewCard({
  content,
  image,
  name,
}: {
  content: string;
  image: string;
  name: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const shortContent = content.substring(0, 150); // Display first 150 characters when collapsed

  return (
    <div className="max-w-sm h-full bg-white shadow-lg rounded-lg">
      <div className="w-full h-[250px] overflow-y-scroll p-6">
        <p className="text-gray-800 text-sm mb-4">
          {isExpanded ? content : `${shortContent}...`}
        </p>
        <button
          className="text-blue-500 font-semibold text-sm"
          onClick={handleToggle}
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="flex items-center mt-4 bg-gray-200 px-6 py-2">
        <img className="w-10 h-10 rounded-full" src={image} alt={name} />
        <div className="ml-4">
          <p className="text-gray-900 font-semibold text-sm">{name}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
