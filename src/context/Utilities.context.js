import React, { createContext, useReducer } from "react";
import { utilitiesReducers } from "../reducers/utilities.reducers";

export const UtilityStateContext = createContext();
export const UtilityStateDispatchContext = createContext();

export function UtilityStateProvider({ children }) {
  const defaultUtilityState = {
    isEditDetailModalOpen: false,
    isDeleteUserModalOpen: false,
    userIdToModify: "",
  };
  const [userState, userStateDispatch] = useReducer(
    utilitiesReducers,
    defaultUtilityState
  );
  return (
    <UtilityStateContext.Provider value={userState}>
      <UtilityStateDispatchContext.Provider value={userStateDispatch}>
        {children}
      </UtilityStateDispatchContext.Provider>
    </UtilityStateContext.Provider>
  );
}
