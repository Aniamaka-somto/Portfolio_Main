import { ButtonOutline, ButtonPrimary } from "./Button";
import ava1 from "/src/assets/avatar-1.jpeg";
import freepik from "/src/assets/freepik.png";
import { motion } from "framer-motion";

const Hero = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  // Child element animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  // Special animation for the headline
  const headlineVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  // Image reveal animation
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateZ: -2,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateZ: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.7,
      },
    },
  };

  // Availability badge animation
  const availabilityVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Buttons container animation
  const buttonsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.7,
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="pt-28 lg:pt-36">
      <motion.div
        className="container lg:grid lg:grid-cols-2 items-center lg:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ margin: "-100px" }}
        // Removed 'once: true' to make the animation repeat
        // Added margin to control when animation triggers
      >
        <div>
          <motion.div
            className="flex items-center gap-3"
            variants={availabilityVariants}
          >
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src={ava1}
                alt=""
                className="img-cover"
                height={40}
                width={40}
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400 animate-ping">
                <span className=""></span>
              </span>
              Available for work
            </div>
          </motion.div>

          <motion.h2
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
            variants={headlineVariants}
          >
            Building Enterprise Web Solutions That Transform
          </motion.h2>

          <motion.div
            className="flex items-center gap-3"
            variants={buttonsContainerVariants}
          >
            <motion.div variants={buttonVariants}>
              <ButtonPrimary label="Download CV" icon="download" />
            </motion.div>
            <motion.div variants={buttonVariants}>
              <ButtonOutline
                label="Scroll Down"
                icon="arrow_downward"
                href="#about"
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants}>
          <motion.figure
            className="hidden lg:block max-w-[480px] ml-auto bg-gradient-to-t from-sky-400
            via-25% via-sky-400/40 rounded-[60px] overflow-hidden"
            variants={imageVariants}
          >
            <img
              src={freepik}
              alt="Aniamaka Somto"
              className="w-full"
              height={615}
              width={800}
            />
          </motion.figure>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
