import * as axios from "axios";

export default async function useGetUsers(count, page) {
  return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`).then((response) => {
    return response.data;
  });
}
