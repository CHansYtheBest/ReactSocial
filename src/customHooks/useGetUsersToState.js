import * as axios from "axios";
import { useEffect } from "react";

export function useGetUsersToState(userSetter, totalSetter, count) {
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}`).then((response) => {
      userSetter(response.data.items);
      totalSetter(response.data.totalCount);
    });
  }, []);
}

export function useChangeUsersPage(userSetter, count, page) {
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`).then((response) => {
    window.history.pushState(null, null, "#" + page);
    userSetter(response.data.items);
  });
}
