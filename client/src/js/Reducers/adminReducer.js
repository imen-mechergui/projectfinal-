import { GET_ALL_USERS } from "../constants/ActionsTypes";

const initState = {
  users: [],
};

 const adminReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload
      };
    default:
      return state;
  }
};
 export default adminReducer