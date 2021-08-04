import { createSelector } from "reselect";

const getStats = (state) => state.stats;
const getGoodStat = (state) => state.stats.good;
const getNeutralStat = (state) => state.stats.neutral;
const getBadStat = (state) => state.stats.bad;

const getTotal = createSelector(
  [getGoodStat, getNeutralStat, getBadStat],
  (good, neutral, bad) => good + neutral + bad
);

const getPositiveFeedbackPercentage = createSelector(
  [getGoodStat, getTotal],
  (good, total) => {
    const ratio = (good / total) * 100;
    return +ratio.toFixed(0);
  }
);

const statSelectors = {
  getStats,
  getGoodStat,
  getNeutralStat,
  getBadStat,
  getTotal,
  getPositiveFeedbackPercentage,
};

export default statSelectors;
