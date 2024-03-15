import React from "react";
import dancingPenguinGif from "../../../public/walking.gif";

const Welcome = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={dancingPenguinGif}
        alt="Dancing Penguin"
        className="max-w-full max-h-full mb-64"
      />
    </div>
  );
};

export default Welcome;
