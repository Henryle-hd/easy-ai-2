"use client";

import React from "react";
import Typewriter from "typewriter-effect";
type Props = {};

const TypeWriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("🚀 Supercharged productivity.")
          .pauseFor(1000)
          .deleteAll();
        typewriter
          .typeString("🤖 AI powered Insights.")
          .pauseFor(1000)
          .deleteAll();
        typewriter
          .typeString("✨ Smart text-Editor")
          .pauseFor(1000)
          .deleteAll()

          .start();
      }}
    />
  );
};

export default TypeWriterTitle;
