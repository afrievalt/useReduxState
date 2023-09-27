import React from "react";
import useReduxState from "../hooks/useReduxState";

type PropType = {
  color: string;
};

function ColorButton(props: PropType) {
  const { color } = props;
  const [currentColor, setColor] = useReduxState("color");
  const isSelected = color === currentColor;
  const handleClick = () => {
    setColor(color);
  };
  return (
    <button disabled={isSelected} onClick={handleClick} type="button">
      {color}
    </button>
  );
}

export default ColorButton;
