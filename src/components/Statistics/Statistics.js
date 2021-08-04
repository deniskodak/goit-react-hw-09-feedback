import React from "react";
import { Ul, Li } from "./styled";

import { useSelector } from "react-redux";
import { statSelectors } from "../../redux/stat";

export default function Statistics() {
  const total = useSelector(statSelectors.getTotal);
  const positivePercentage = useSelector(
    statSelectors.getPositiveFeedbackPercentage
  );
  const stats = useSelector(statSelectors.getStats);

  return (
    <Ul>
      <Li>Good: {stats.good}</Li>
      <Li>Neutral: {stats.neutral}</Li>
      <Li>Bad: {stats.bad}</Li>
      <Li>Total: {total}</Li>
      <Li>Positive feedback: {positivePercentage}% </Li>
    </Ul>
  );
}
