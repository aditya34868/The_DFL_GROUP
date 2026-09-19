
// jab tak ye number screen pe visible nahi hota, count start nahi hota. Visible hote hi 0 se target value tak count-up animation chalti hai
import React from "react";
import CountUpModule from "react-countup";
import { useInView } from "react-intersection-observer";

// Handle both Default and Named Module Exports safely
const CountUp = CountUpModule.default || CountUpModule;

export default function Counter({ value = 0, suffix = "", duration = 2 }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <span ref={ref}>
        {inView && <CountUp
          start={0}
          end={value}
          duration={duration}
          suffix={suffix}
        />}
    </span>
  );
}

