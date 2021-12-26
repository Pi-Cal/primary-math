import React, { useState } from "react";
import { ChapterPartBox } from "../components/chapter.part.box";
import "./chapter.css";

import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import { FakeData } from "../data/chapter-2.data";
import { useNavigate } from "react-router-dom";

export const Chapter2 = ({ show }) => {
  const [open, set] = useState(false);

  const navigate = useNavigate();

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      size: "20%",
      background: "darkseagreen",
    },
    to: {
      size: open ? "60%" : "20%",
      background: open ? "white" : "darkseagreen",
    },
  });

  const partNameStyle = useSpring({
    from: {
      opacity: open ? 1 : 0, 
    },
    to: { 
      opacity: !open ? 1 : 0, 
    },
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
        !open ? <animated.div className="chapter-name pe-3 ps-3" style={{...partNameStyle}}>Bài toán trồng cây - <br/>khoảng cách</animated.div> : <></>
      }
    </animated.div>
  );
};
