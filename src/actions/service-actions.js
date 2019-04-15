const tomatosLoaded = tomatos => {
  return {
    type: "FETCH_TOMATOS_REQUEST_SUCCESS",
    payload: tomatos
  };
};

const timerValueUpdated = timerValue => {
  return {
    type: "TIMER_VALUE_UPDATED",
    payload: timerValue
  };
};
const newTomatoStarted = newTomatoName => {
  return {
    type: "NEW_TOMATO_STARTED",
    payload: newTomatoName
  };
};

const tomatoAddedInList = () => {
  return {
    type: "TOMATO_ADDED_IN_LIST"
  };
};

export {
  tomatosLoaded,
  timerValueUpdated,
  newTomatoStarted,
  tomatoAddedInList
};
