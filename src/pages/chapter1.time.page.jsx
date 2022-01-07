import React, { useState } from "react";
import "./chapter.css";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import { FakeData } from "../data/chapter-1.data";
import { useNavigate } from "react-router-dom";

export const Chapter1 = ({ show }) => {
  const [open, set] = useState(false);

  console.log(FakeData);

  const navigate = useNavigate();

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%",
      background: "hotpink",
    },
    to: {
      size: open ? "60%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const partNameStyle = useTransition(open, {
    from: { opacity: 0, scale: 2 },
    enter: { opacity: 1, scale: 1, delay: 500 },
    leave: { opacity: 0, scale: 2 },
  })

  const transApi = useSpringRef();
  const transition = useTransition(open ? FakeData : [], {
    ref: transApi,
    trail: 400 / FakeData.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <animated.div
      style={{ ...rest, width: size, height: size }}
      className="chapter-container"
      onClick={() => set((open) => !open)}
    >
      {transition((style, item) => (
        <animated.div
          className="chapter-part"
          style={{ ...style, background: item.css }}
          onClick={()=>navigate(item.nav)}
        >
          <div className="part-name pe-1 ps-1">{item.name}</div>
        </animated.div>
      ))} 
      {
        partNameStyle((style, open)=> !open && <animated.div className="chapter-name" style={{...style}}>Cho tôi biết mấy giờ rồi nhé</animated.div>) 
      }
    </animated.div>
  );
};
