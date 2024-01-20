import gsap from "gsap";

export function animateTextLoading(wordProgressRef) {
  const tl = gsap.timeline();

  tl.to(wordProgressRef.current, {
    yPercent: -80,
    duration: 5,
    ease: "power2.inOut",
  });
  return tl;
}

export const progressAnimation = (progressRef, progressNumberRef) => {
  const tl = gsap.timeline();

  tl.from(progressRef.current, {
    scaleX: 0,
    duration: 5,
    ease: "power2.inOut",
  })
    .to(
      progressNumberRef.current,
      {
        x: "100vw",
        duration: 5,
        ease: "power2.inOut",
      },
      "<"
    )
    .to(
      progressNumberRef.current,
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent",
      },
      "<"
    )
    .to(progressNumberRef.current, {
      y: 24,
      autoAlpha: 0,
    });
  return tl;
};

export const colapseWords = (loaderRef) => {
  const tl = gsap.timeline();

  tl.to(loaderRef.current, {
    "clip-path": "polygon(0%  50% , 100%  50%, 100%  50%, 0% 50% )",
    duration: 5,
    ease: "expo.inOut",
  });

  return tl;
};
