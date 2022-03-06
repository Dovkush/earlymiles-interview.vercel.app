import { combineReducers } from "redux";
import { FetchAlbumReducer } from "./fetchAlbumReducer";
import { FetchPhotosReducer } from "./fetchPhotosReducer";
const rootReducer = combineReducers({
  albumsData: FetchAlbumReducer,
  photosData: FetchPhotosReducer,
});
export default rootReducer;
