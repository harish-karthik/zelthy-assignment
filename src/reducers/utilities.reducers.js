export function utilitiesReducers(state, action) {
  switch (action.type) {
    case "SHOW-EDIT-DETAIL-MODAL":
      return {
        isEditDetailModalOpen: true,
        isDeleteUserModalOpen: false,
        userIdToModify: action.id,
      };
    case "SHOW-DELETE-USER-MODAL":
      return {
        isEditDetailModalOpen: false,
        isDeleteUserModalOpen: true,
        userIdToModify: action.id,
      };
    case "HIDE-EDIT-DETAIL-MODAL":
      return {
        isEditDetailModalOpen: false,
        isDeleteUserModalOpen: false,
        userIdToModify: "",
      };
    case "HIDE-DELETE-USER-MODAL":
      return {
        isEditDetailModalOpen: false,
        isDeleteUserModalOpen: false,
        userIdToModify: "",
      };
    default:
      return state;
  }
}
