import React from "react";
import { Button, Ul, Li } from "./styled";

import { useDispatch, useSelector } from "react-redux";
import { statActions, statSelectors } from "../../redux/stat";

export default function FeadbackOptions() {
  const dispatch = useDispatch();

  const stats = useSelector(statSelectors.getStats);

  const statsArray = Object.keys(stats);
  const slicedArray = statsArray.slice(0, 3);

  const onLeaveFeedback = (e) => {
    switch (e.target.textContent) {
      case "good":
        dispatch(statActions.setGoodStat());
        break;
      case "neutral":
        dispatch(statActions.setNeutralStat());
        break;
      case "bad":
        dispatch(statActions.setBadStat());
        break;
      default:
        alert("Oops, something went wrong");
    }
  };

  return (
    <Ul>
      {slicedArray.map((stat, index) => {
        return (
          <Li key={index}>
            <Button className={stat} type="button" onClick={onLeaveFeedback}>
              {stat}
            </Button>
          </Li>
        );
      })}
    </Ul>
  );
}
