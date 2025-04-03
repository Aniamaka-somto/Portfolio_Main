import { ButtonPrimary } from "./Button";

const Footer = () => {
  const sitenav = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Reviews",
      href: "#reviews",
    },
    {
      label: "Contact me",
      href: "#contact",
    },
  ];

  const media = [
    {
      label: "GitHub",
      href: "https://github.com/Aniamaka-somto",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
    },
    {
      label: "Twitter X",
      href: "https://x.com/AniamakaSomto",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aniamaka_somto",
    },
    {
      label: "CodePen",
      href: "https://codepen.io/",
    },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
              Transform your digital presence today!
            </h2>
            <ButtonPrimary label="Start Now" icon="chevron_right" />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div className="">
              <div className="">
                <p>Sitemap</p>
                <ul>
                  {sitenav.map(({ label, href }, index) => (
                    <li key={index}>
                      <a
                        href={href}
                        className="block text-lg py-1  text-zinc-400 transition-colors hover:text-zinc-200"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="">
                <p>Socials</p>
                <ul>
                  {media.map(({ label, href }, index) => (
                    <li key={index}>
                      <a
                        href={href}
                        className="block text-lg py-1 text-zinc-400 transition-colors hover:text-zinc-200 "
                        target="_blank"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8">
          <a
            href=""
            className=" text-lg py-1 font-bold text-zinc-400 transition-colors hover:text-zinc-200 "
          >
            CW
          </a>
          <p className="text-zinc-500 text-sm">
            &copy; 2024 <span className="text-zinc-200">Aniamaka Somto</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
