import * as axios from "axios";

export default async function useFriendRemove(id, setter) {
  return axios
    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "7cc4b905-033a-4e80-91b2-a5127be51a6a",
      },
    })
    .then((response) => {
      console.log(response);
      if (response.data.resultCode === 0) {
        setter(id);
      }
    });
}
