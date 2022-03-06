import { GET_PHOTOS } from "../actions/action.js";
const INITIAL_STATE = {
  Photos: [],
};
export const FetchPhotosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        Photos: [...state.Photos, action.photos],
      };
    default:
      return state;

    // case GET_ALBUMS_FAILED:
    //   return {
    //     ...state,
    //     error: true,
    //   };
    // case GET_PHOTOS_FAILED:
    //   return {
    //     ...state,
    //     error: true,
    //   };
  }
};
