import React from "react";

const RadialGradientBackground = ({ variant = "hero", gradients = [] }) => {
  const variants = {
    hero: [
      {
        position: "top-1 left-1 -translate-x-1/2 -translate-y-1/2",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(37, 99, 235, 0.10)", stop: "0%" },
          { color: "rgba(37, 99, 235, 0.15)", stop: "25%" },
          { color: "rgba(37, 99, 235, 0.20)", stop: "50%" },
          { color: "rgba(37, 99, 235, 0.15)", stop: "75%" },
          { color: "rgba(37, 99, 235, 0.10)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "top-1 left-1",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(37, 99, 235, 0.10)", stop: "0%" },
          { color: "rgba(37, 99, 235, 0.15)", stop: "25%" },
          { color: "rgba(37, 99, 235, 0.20)", stop: "50%" },
          { color: "rgba(37, 99, 235, 0.15)", stop: "75%" },
          { color: "rgba(37, 99, 235, 0.10)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
      {
        position: "bottom-1 right-1",
        size: "w-[1400px] h-[1400px]",
        colors: [
          { color: "rgba(37, 99, 235, 0.10)", stop: "0%" },
          { color: "rgba(37, 99, 235, 0.15)", stop: "25%" },
          { color: "rgba(37, 99, 235, 0.20)", stop: "50%" },
          { color: "rgba(37, 99, 235, 0.15)", stop: "75%" },
          { color: "rgba(37, 99, 235, 0.10)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],
    about: [
      {
        position: "bottom-0 left-[75%]",
        size: "w-[700px] h-[700px]",
        colors: [
          { color: "rgba(37, 99, 235, 0.10)", stop: "0%" },
          { color: "rgba(37, 99, 235, 0.15)", stop: "25%" },
          { color: "rgba(37, 99, 235, 0.20)", stop: "50%" },
          { color: "rgba(37, 99, 235, 0.15)", stop: "75%" },
          { color: "rgba(37, 99, 235, 0.10)", stop: "100%" },
        ],
        blur: "0px",
        opacity: 0.5,
      },
    ],
  };

  const activeGradients =
    variant === "custom" ? gradients : variants[variant] || variants.hero;

  const generatedGradient = (colors) => {
    const colorStop = colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(", ");
    return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStop}, transparent 60%, transparent 100%)`;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generatedGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default RadialGradientBackground;
