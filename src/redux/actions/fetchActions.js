import {
  GET_ALBUMS,
  GET_PHOTOS,
  GET_ALBUMS_FAILED,
  GET_PHOTOS_FAILED,
} from "./action";
import { axiosInstance as axios } from "../../axiosInstance";
export const fetchAlbums = () => {
  return (dispatch) => {
    axios
      .get("/albums")
      .then((res) => {
        dispatch({ type: GET_ALBUMS, albums: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_ALBUMS_FAILED, albums: [] });
      });
  };
};

export const fetchPhotos = () => {
  return (dispatch) => {
    console.log("hello");

    axios
      .get("/photos")
      .then((res) => {
        dispatch({ type: GET_PHOTOS, photos: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_PHOTOS_FAILED, photos: [] });
      });
  };
};
