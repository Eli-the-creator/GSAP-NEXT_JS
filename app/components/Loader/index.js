import React, { useEffect, useRef } from "react";
import { words } from "./data";
import {
  animateTextLoading,
  progressAnimation,
  colapseWords,
} from "./animation";

import styles from "./Loader.module.scss";
import gsap from "gsap";

const Loader = ({ timeline }) => {
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const progressNumberRef = useRef(null);
  const wordProgressRef = useRef(null);

  useEffect(() => {
    if (timeline) {
      timeline
        .add(animateTextLoading(wordProgressRef))
        .add(progressAnimation(progressRef, progressNumberRef), "0")
        .add(colapseWords(loaderRef), "-=1");
    }
  }, [timeline]);

  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.loader__progressWrapper}>
        <div ref={progressRef} className={styles.loader__progress}></div>
        <span ref={progressNumberRef} className={styles.loader__progressNumber}>
          0
        </span>
      </div>
      <div ref={loaderRef} className={styles.loader}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div ref={wordProgressRef} className={styles.loader__wordsGroup}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
