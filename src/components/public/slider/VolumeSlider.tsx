import React, { FC } from "react";

interface VolumeSliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  onDragStart?: () => void;
  onDragEnd?: (value: number) => void;
  trigger: boolean;
}

export const VolumeSlider: FC<VolumeSliderProps> = ({
  max = 100,
  min = 0,
  value = 100,
  onChange,
  onDragEnd,
  onDragStart,
  trigger = false,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    onChange(newValue);
  };

  const handleMouseDown = () => {
    onDragStart?.();
  };

  const handleMouseUp = (event: React.MouseEvent<HTMLInputElement>) => {
    const newValue = Number((event.target as HTMLInputElement).value);
    onDragEnd?.(newValue);
  };
  return (
    <div
      className={`relative group ${
        trigger ? "w-[100px] opacity-100" : "w-0"
      } h-[2px] transition-all duration-300`}
    >
      <input
        type="range"
        max={max}
        min={min}
        value={value}
        step={1}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onChange={handleInputChange}
        className="absolute bg-transparent cursor-pointer rounded-md z-10 h-1 outline-0 appearance-none left-[-5px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:hover:w-[12px] [&::-webkit-slider-thumb]:w-[0px] [&::-webkit-slider-thumb]:hover:h-[12px] [&::-webkit-slider-thumb]:h-[0px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
        style={{ width: `calc(100% + 10px)` }}
      />
      <div className="absolute group-hover:h-[4px] z-0 w-full h-full rounded-full bg-gray-500/70 cursor-pointer"></div>
      <div
        className="absolute z-0 group-hover:h-[4px] h-full rounded-md bg-white"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
