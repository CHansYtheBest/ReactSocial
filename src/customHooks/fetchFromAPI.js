import * as axios from "axios";

const instanse = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2c5b76b2-e1a1-4e88-b0db-fc9b4812f59e",
    // "API-KEY": "7cc4b905-033a-4e80-91b2-a5127be51a6a",
  },
});

export function useCheckIfFriend(id) {
  return instanse.get(`follow/${id}`).then((response) => {
    if (response.data.resultCode === 0) {
      return response;
    }
  });
}

export function useFriendRemove(id) {
  return instanse.delete(`follow/${id}`).then((response) => {
    if (response.data.resultCode === 0) {
      return id;
    }
  });
}

export function useFriendAdd(id) {
  return instanse.post(`follow/${id}`, {}).then((response) => {
    if (response.data.resultCode === 0) {
      return id;
    }
  });
}

export function useGetUsers(count, page, onlyFriends) {
  return instanse.get(`users?count=${count}&page=${page}&friend=${onlyFriends}`).then((response) => {
    return response.data;
  });
}

export function useGetProfile(id) {
  return axios.all([
    instanse.get(`profile/status/${id}`).then((response) => {
      return response.data;
    }),
    instanse.get(`profile/${id}`).then((response) => {
      return response.data;
    }),
  ]);
}

export function updateStatus(status) {
  return instanse.put(`profile/status`, { status: status }).then((response) => {
    return response;
  });
}

export function updateProfile(jsonObj) {
  return instanse.put(`profile`, jsonObj).then((response) => {
    return response;
  });
}

export function updateAvatar(file) {
  console.log(file);
  return instanse.put(`profile/photo`, file).then((response) => {
    return response;
  });
}

export function useCheckIsLoggedIn() {
  return instanse.get(`auth/me`).then((response) => {
    if (response.data.resultCode === 0) {
      return response.data;
    } else {
      return false;
    }
  });
}

export function useLogin(email, password, rememberMe) {
  return instanse.post(`auth/login`, { email, password, rememberMe }).then((response) => {
    console.log(response);
    return response;
  });
}

export function useLogout() {
  return instanse.delete(`auth/login`).then((response) => {
    return response;
  });
}
