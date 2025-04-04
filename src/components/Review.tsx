import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import people1 from "/src/assets/people-1.jpg";
import people2 from "/src/assets/people-2.jpg";
import people3 from "/src/assets/people-3.jpg";
import people4 from "/src/assets/people-4.jpg";
import people5 from "/src/assets/people-5.jpg";
import people6 from "/src/assets/people-6.jpg";

const Review = () => {
  const reviews = [
    {
      content:
        "Brilliant developer who transformed our vision into reality. The website performance metrics are off the charts!",
      name: "Isabella Kumar",
      imgSrc: people1,
      company: "ByteVision",
    },
    {
      content:
        "Incredible attention to detail in both frontend and backend development. Our e-commerce site has never run smoother.",
      name: "Marcus Chen",
      imgSrc: people2,
      company: "QuantumStack",
    },
    {
      content:
        "From concept to deployment, the entire process was seamless. The responsive design works flawlessly across all devices.",
      name: "Derek Foster",
      imgSrc: people3,
      company: "AlphaSync",
    },
    {
      content:
        "Exceeded our expectations with innovative solutions and cutting-edge technologies. A true professional in every sense.",
      name: "James Fletcher",
      imgSrc: people4,
      company: "InnovateFlow",
    },
    {
      content:
        "Outstanding technical expertise combined with great project management skills. Delivered our platform ahead of schedule.",
      name: "Priya Patel",
      imgSrc: people5,
      company: "FusionLabs",
    },
    {
      content:
        "Remarkable problem-solving abilities and clean, maintainable code. Our web application performance improved by 200%.",
      name: "Jack Keeper",
      imgSrc: people6,
      company: "ApexTech",
    },
  ];
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-8">What clients say about our work</h2>
        <Marquee>
          <div className="flex items-stretch gap-3 w-fit scrub-slide">
            {reviews.map(({ content, name, company, imgSrc }, key) => (
              <ReviewCard
                name={name}
                reviews={content}
                company={company}
                img={imgSrc}
                key={key}
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Review;
