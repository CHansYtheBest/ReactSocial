import * as axios from "axios";

export default async function useGetProfile(id) {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then((response) => {
    return response.data;
  });
}
