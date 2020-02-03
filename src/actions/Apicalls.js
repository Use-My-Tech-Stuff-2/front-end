import { axiosWithAuth } from "../utils/axioswithauth";
import { DATA_FAILURE, DATA_START, DATA_SUCCESS } from "../reducers";

export const Fetch = () => dispatch => {
  dispatch({ type: DATA_START });

  axiosWithAuth()
    .get("/api/")
    .then(
      res =>
        console.log(res, "res data") &
        dispatch({ type: DATA_SUCCESS, payload: res.data })
    )
    .catch(
      err =>
        console.log(err, "ERROR") &
        dispatch({ type: DATA_FAILURE, payload: err })
    );
};

export const Send = (friend, id) => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .post(`/api/`, friend)
    .then(res => {
      console.log(res, "Sent data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const Edit = (friend, id) => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .put(`/api//${id}`, friend)
    .then(res => {
      console.log(res, "Deleted data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};

export const Delete = id => dispatch => {
  dispatch({ type: DATA_START });
  axiosWithAuth()
    .delete(`/api/${id}`)
    .then(res => {
      console.log(res, "Deleted data");
      setTimeout(() => {
        dispatch({ type: DATA_SUCCESS, payload: res.data });
      }, 2500);
    })
    .catch(err => {
      dispatch({ type: DATA_FAILURE, payload: err.response });
    });
};
