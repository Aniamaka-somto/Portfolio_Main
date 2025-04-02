import React, { useRef, useEffect } from "react";

interface NavBarProps {
  navOpen: boolean;
}

interface NavItem {
  label: string;
  link: string;
  className: string;
  isFirstItem?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ navOpen }) => {
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const activateBox = (): void => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
      activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
      activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
      activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
    }
  };

  useEffect(() => {
    activateBox();
    window.addEventListener("resize", activateBox);

    return () => {
      window.removeEventListener("resize", activateBox);
    };
  }, []);

  const activeCurrentLink = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }

    const target = e.target as HTMLAnchorElement;
    target.classList.add("active");
    lastActiveLink.current = target;

    if (activeBox.current) {
      activeBox.current.style.top = `${target.offsetTop}px`;
      activeBox.current.style.left = `${target.offsetLeft}px`;
      activeBox.current.style.width = `${target.offsetWidth}px`;
      activeBox.current.style.height = `${target.offsetHeight}px`;
    }
  };

  const navItems: NavItem[] = [
    {
      label: "Home",
      link: "#home",
      className: "nav-link active",
      isFirstItem: true,
    },
    {
      label: "About",
      link: "#about",
      className: "nav-link",
    },
    {
      label: "Work",
      link: "#work",
      className: "nav-link",
    },
    {
      label: "Reviews",
      link: "#reviews",
      className: "nav-link",
    },
    {
      label: "Contact",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, isFirstItem }, index) => {
        return (
          <a
            href={link}
            key={index}
            className={className}
            ref={(el) => {
              if (isFirstItem && el) {
                lastActiveLink.current = el;
              }
            }}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

export default NavBar;
