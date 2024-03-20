import { useState, useEffect } from "react";
import Logo from "../logo";
import LangSelect from "./langSelector";
import Navigation from "./navigation";


const Navbar = ({paths}) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${isSticky ? "sticky" : ""}`}>
      <span className="logo__content"><Logo background="black" strokeOne="white" strokeTwo="white" size="50px" />Zanle Studio</span>
      <Navigation paths={paths} isSticky={isSticky} />
      <LangSelect />

      <style jsx>{`
        .navbar {
          width: 100%;
          padding: 0 3em;
          height: 80px;
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          background: transparent;
          backdrop-filter: blur(0.5em);
          transition: background-color 0.3s ease-in-out;
        }

        .navbar.sticky {
          padding: 1em;
          background-color: rgba(0, 0, 0, 0.7); 
        }

        .navbar .logo__content{
          display: flex;
          align-items: center;
          color: white;
          font-size: 22px;
        }

        @media (max-width: 950px) {.navbar{display: none}}
        
      `}</style>
    </div>
  );
};

export default Navbar;
