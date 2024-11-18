import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCarousel = ({ items }) => {
  return (
    <Marquee speed={50} pauseOnHover gradient={false}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "0 20px",
            fontSize: "20px",
            fontWeight: "bold",
            whiteSpace: "nowrap",
          }}
        >
          {item}
        </div>
      ))}
    </Marquee>
  );
};

export default MarqueeCarousel;
