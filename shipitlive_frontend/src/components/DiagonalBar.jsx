import React from "react";

const DiagonalBar = () => {
  return (
    <div className="relative h-8 w-full bg-backgroud flex items-center justify-end px-4">
      {/* First Slanted Part */}
      <div
        className="absolute left-0 top-0 h-full bg-primary-light bg-opacity-50"
        style={{
          width: "95%",
          clipPath: "polygon(0% 0%, 83% 0%, 80% 100%, 0% 100%)",
        }}
      ></div>

      {/* Second Slanted Part (Right) */}
      <div
        className="absolute right-0 top-0 h-full bg-primary-light bg-opacity-50"
        style={{
          width: "16%",
          clipPath: "polygon(17% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* Version Text */}
      <div className="relative z-10 text-black font-bold pr-4">1.0.0</div>
    </div>
  );
};

export default DiagonalBar;
