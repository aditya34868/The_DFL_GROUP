import React from "react";
import CountUpModule from "react-countup";
import { useInView } from "react-intersection-observer";

// Handle both Default and Named Module Exports safely
const CountUp = CountUpModule.default || CountUpModule;

export default function Counter({ value = 0, suffix = "", duration = 3, decimals = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  // Agar value float (decimal) hai to automatically decimals set kar lega
  const decimalCount = decimals || (value.toString().split(".")[1]?.length || 0);

  return (
    <span ref={ref}>
      {inView ? (
        <CountUp
          start={0}
          end={value}
          duration={duration}
          decimals={decimalCount}
          suffix={suffix}
        />
      ) : (
        0 // Component render hone par layout shift rokne ke liye initial 0
      )}
    </span>
  );
}