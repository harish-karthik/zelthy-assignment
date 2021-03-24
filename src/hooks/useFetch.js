import { useReducer, useEffect } from "react";

export function useFetch(key, defaultValue, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultValue);

  useEffect(() => {
    if (window.localStorage.getItem(key) !== null) {
      let interpolatedUserInfo = JSON.parse(window.localStorage.getItem(key));
      dispatch({ type: "FETCH-SUCCESS", payload: interpolatedUserInfo });
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          let interpolatedUserInfo = data.map((userData) => ({
            username: userData.username,
            id: userData.id,
            name: userData.name,
            phone: userData.phone,
            website: userData.website,
            email: userData.email,
            liked: false,
          }));
          dispatch({ type: "FETCH-SUCCESS", payload: interpolatedUserInfo });
        });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state.users));
  }, [state, key]);
  return [state, dispatch];
}

export default useFetch;
