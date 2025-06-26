import React from "react";
import { Fade } from "react-awesome-reveal";

const AnimatedPageWrapper = ({ children }) => {
  return (
    <Fade triggerOnce cascade>
      {children}
    </Fade>
  );
};

export default AnimatedPageWrapper;
