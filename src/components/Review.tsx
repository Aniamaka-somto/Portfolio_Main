import ReviewCard from "./ReviewCard";
import people1 from "/src/assets/people-1.jpg";
import people2 from "/src/assets/people-2.jpg";
import people3 from "/src/assets/people-3.jpg";
import people4 from "/src/assets/people-4.jpg";
import people5 from "/src/assets/people-5.jpg";
import people6 from "/src/assets/people-6.jpg";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ReviewProps {
  content: string;
  name: string;
  imgSrc: string;
  company: string;
}

const Review: React.FC = () => {
  const reviews: ReviewProps[] = [
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

  const carouselRef = useRef<HTMLDivElement>(null);
  const [carouselPosition, setCarouselPosition] = useState<number>(0);
  const [maxScroll, setMaxScroll] = useState<number>(0);

  // Calculate the maximum scroll distance
  useEffect(() => {
    if (carouselRef.current) {
      setMaxScroll(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  // Handle scroll by a specific card width
  const handleScroll = (direction: "left" | "right"): void => {
    const cardWidth = 420; // Width of a review card (lg:w-[420px])

    if (direction === "left") {
      const newPosition = Math.max(carouselPosition - cardWidth, 0);
      setCarouselPosition(newPosition);
    } else {
      const newPosition = Math.min(carouselPosition + cardWidth, maxScroll);
      setCarouselPosition(newPosition);
    }
  };

  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <motion.h2
          className="headline-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          What clients say about our work
        </motion.h2>

        <div className="relative">
          <motion.div ref={carouselRef} className="overflow-hidden">
            <motion.div
              className="flex items-stretch gap-6"
              animate={{ x: -carouselPosition }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map(({ content, name, company, imgSrc }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.1 > 0.5 ? 0.5 : index * 0.1,
                    },
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <ReviewCard
                    name={name}
                    reviews={content}
                    company={company}
                    img={imgSrc}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              className="p-3 bg-zinc-800 rounded-full hover:bg-sky-600 transition-colors h-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("left")}
              disabled={carouselPosition <= 0}
              style={{ opacity: carouselPosition <= 0 ? 0.5 : 1 }}
            >
              <span className="material-symbols-rounded">arrow_back</span>
            </motion.button>

            <motion.button
              className="p-3 bg-zinc-800 rounded-full hover:bg-sky-600 transition-colors h-12"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll("right")}
              disabled={carouselPosition >= maxScroll}
              style={{ opacity: carouselPosition >= maxScroll ? 0.5 : 1 }}
            >
              <span className="material-symbols-rounded">arrow_forward</span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
