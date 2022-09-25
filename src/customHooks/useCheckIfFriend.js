import * as axios from "axios";

export default async function useCheckIfFriend(id) {
  return axios
    .get(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.resultCode === 0) {
        return response;
      }
    });
}
