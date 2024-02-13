import { Cycle } from "./reducer";

export enum CycleActionTypes {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_FINISHED = "MARK_CURRENT_CYCLE_AS_FINISHED",
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: CycleActionTypes.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
};

export const interruptCurrentCycleAction = () => {
  return {
    type: CycleActionTypes.INTERRUPT_CURRENT_CYCLE,
  };
};

export const markCurrentCycleAsFinishedAction = () => {
  return {
    type: CycleActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
  };
};
