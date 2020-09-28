import axios from "axios";

export default {
  getUsers: function () {
    return axios.get(process.env.REACT_APP_RANDOM_USER_URL);
  }
};
