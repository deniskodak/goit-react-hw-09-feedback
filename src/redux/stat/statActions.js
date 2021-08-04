import { createAction } from "@reduxjs/toolkit";

const setGoodStat = createAction("stat/setGoodStat");

const setNeutralStat = createAction("stat/setNeutralStat");

const setBadStat = createAction("stat/setBadStat");

const setReset = createAction("stat/setReset");

const statActions = {
  setGoodStat,
  setNeutralStat,
  setBadStat,
  setReset,
};

export default statActions;
