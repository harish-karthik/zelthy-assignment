import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { userDataReducers } from "../reducers/userData.reducers";

export const UserStateContext = createContext();
export const UserStateDispatchContext = createContext();

export function UserStateProvider({ children }) {
  const defaultUserState = {
    appIsLoading: true,
    users: [],
  };
  const [userState, userStateDispatch] = useFetch(
    "userData",
    defaultUserState,
    userDataReducers
  );
  return (
    <UserStateContext.Provider value={userState}>
      <UserStateDispatchContext.Provider value={userStateDispatch}>
        {children}
      </UserStateDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}
