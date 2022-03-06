import { GET_ALBUMS } from "../actions/action.js";
const INITIAL_STATE = {
  Albums: [],
};
export const FetchAlbumReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        Albums: [...state.Albums, action.albums],
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
