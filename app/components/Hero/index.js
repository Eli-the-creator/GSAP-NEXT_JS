import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

import styles from "./Hero.module.scss";

import Logo from "@/components/Logo";
import { animateTitle, animateImage, revealMenu } from "./animation";

const Hero = () => {
  const heroRef = useRef(null);
  const timelineRef = useRef(gsap.timeline());

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timelineRef.current;

      tl.add(animateTitle()).add(animateImage(), 0).add(revealMenu(), 0);
    }, heroRef);

    return () => context.reverse();
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.hero__top}>
        <div data-menu-item>
          <Logo />
        </div>
        <span data-menu-item>about</span>
        <span data-menu-item>contact</span>
      </div>

      <h1 className={styles.hero__title}>
        <span data-title-first data-hidden>
          EZ
        </span>
        <span data-hero-line className={styles.hero__line}></span>
        <span data-title-last data-hidden>
          CREATOR
        </span>
      </h1>

      <div className={styles.hero__image}>
        <div data-image-overlay className={styles.hero__imageOverlay}></div>
        <Image
          data-image
          src="/images/blob.jpg"
          width={1728}
          height={650}
          alt="Blob"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default Hero;
