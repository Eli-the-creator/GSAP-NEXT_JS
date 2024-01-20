"use client";

import Loader from "@/components/Loader";
import Hero from "@/components/Hero";

import { useLayoutEffect, useState } from "react";
import gsap from "gsap";

const Home = () => {
  const [loaderFinish, setLoaderFinish] = useState(false);

  const [timeLine, setTimeLine] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoaderFinish(true),
      });
      setTimeLine(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <main>{loaderFinish ? <Hero /> : <Loader timeline={timeLine} />}</main>
  );
};

export default Home;
