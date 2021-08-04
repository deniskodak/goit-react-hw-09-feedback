import React from "react";
import FeadbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import SectionWithTitle from "./components/Section";
import ErrorMessage from "./components/ErrorMessage";
import ResetButton from "./components/ResetButton/ResetButton";
import { statSelectors } from "./redux/stat";
import { useSelector } from "react-redux";

export default function App() {
  const totalStats = useSelector(statSelectors.getTotal);

  return (
    <>
      <SectionWithTitle title="Please leave your Feedback">
        <FeadbackOptions />
      </SectionWithTitle>

      <SectionWithTitle title="Statistics">
        {totalStats ? (
          <Statistics />
        ) : (
          <ErrorMessage message="No feedback given" />
        )}
      </SectionWithTitle>

      <ResetButton />
    </>
  );
}
