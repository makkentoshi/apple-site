import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth > 760 ? heroVideo : smallHeroVideo
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth > 760) {
      setVideoSrc(heroVideo);
    } else {
      setVideoSrc(smallHeroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, [videoSrc]);
  useGSAP(() => {
    gsap.to(".hero-title", {
      duration: 1.5,
      delay: 1.2,
      y: 0,
      opacity: 1,
      ease: "power4.out",
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      duration: 1.5,
      delay: 2,
      ease: "power4.out",
    });
  }, []);
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc}></source>
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
