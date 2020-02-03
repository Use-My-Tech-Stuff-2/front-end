import Axios from "axios";

export const axiosWithAuth = () => {
  return Axios.create({
    baseURL: "BaseURL",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};
