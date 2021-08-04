import { combineReducers, createReducer } from "@reduxjs/toolkit";

import statActions from "./statActions";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const stats = createReducer(initialState, {
  [statActions.setGoodStat]: (state) => {
    state.good++;
  },
  [statActions.setNeutralStat]: (state) => {
    state.neutral++;
  },
  [statActions.setBadStat]: (state) => {
    state.bad++;
  },
  [statActions.setReset]: () => initialState,
});

export default combineReducers({
  stats,
});
