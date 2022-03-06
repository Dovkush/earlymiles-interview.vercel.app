import { GET_ALBUMS, GET_PHOTOS } from "./action";
import { axiosInstance as axios } from "../../axiosInstance";
export const fetchAlbums = () => {
  return (dispatch) => {
    axios
      .get("/albums")
      .then((res) => {
        dispatch({ type: GET_ALBUMS, albums: res.data });
      })
      .catch((err) => {
        console.log(err);
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
        console.log(err);
      });
  };
};
