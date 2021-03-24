export function userDataReducers(state, action) {
  switch (action.type) {
    case "FETCH-SUCCESS":
      return {
        appIsLoading: false,
        users: action.payload,
      };
    case "FETCH-FAILED":
      return {
        appIsLoading: false,
        users: [],
        error: "Something Went Wrong",
      };
    case "LIKE-USER": {
      let modifiedUserList = state.users.map((user) =>
        user.id === action.id ? { ...user, liked: !user.liked } : { ...user }
      );
      return { ...state, users: modifiedUserList };
    }
    case "DELETE-USER": {
      let modifiedUserList = state.users.filter(
        (user) => user.id !== action.id
      );
      return { ...state, users: modifiedUserList };
    }
    case "EDIT-USER": {
      let modifiedUserList = state.users.map((user) =>
        user.id === action.user.id ? { ...action.user } : { ...user }
      );
      return { ...state, users: modifiedUserList };
    }
    default:
      return state;
  }
}
