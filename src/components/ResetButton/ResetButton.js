import React from "react";
import { useDispatch } from "react-redux";
import { statActions } from "../../redux/stat";

const styles = {
  "border-radius": "10px",
  "margin-left": "40px",
  padding: "10px",
  width: "100px",
  background: "transparent",
  "font-weight": "600",
};

export default function ResetButton() {
  const dispatch = useDispatch();

  const onReset = () => dispatch(statActions.setReset());
  return (
    <button type="button" onClick={onReset} style={styles}>
      Reset all stats
    </button>
  );
}
