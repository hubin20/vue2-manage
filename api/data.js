import axios from "./axios";

export const getMenu = (param) => {
  // console.log(axios);
  return axios.request({
    url: "/permission/getMenu",
    method: "post",
    data: param,
  });
};

export const getData = () => {
  // console.log(axios);
  return axios.request({
    url: "/home/getData",
  });
};

export const getUser = (params) => {
  return axios.request({
    url: "/user/getUser",
    method: "get",
    params,
  });
};
