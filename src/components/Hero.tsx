import { ButtonOutline, ButtonPrimary } from "./Button";
import ava1 from "/src/assets/avatar-1.jpeg";
import freepik from "/src/assets/freepik.png";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
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
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Enterprise Web Solutions That Transform
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />
            <ButtonOutline
              label="Scroll Down"
              icon="arrow_downward"
              href="#about"
            />
          </div>
        </div>

        <div>
          <figure
            className="hidden lg:block max-w-[480px] ml-auto bg-gradient-to-t from-sky-400
      via-25% via-sky-400/40 rounded-[60px] overflow-hidden"
          >
            <img
              src={freepik}
              alt="Aniamaka Somto"
              className="w-full "
              height={615}
              width={800}
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
