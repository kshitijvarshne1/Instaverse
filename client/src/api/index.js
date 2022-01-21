import axios from "axios";

const API = axios.create({
  baseURL: "http://instaverse-web.herokuapp.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPost = () => API.get("/post");

export const createPost = (newPost) => API.post("/post", newPost);

export const updatePost = (id, updatePost) =>
  API.patch("/post" + "/" + id, updatePost);

export const deletePost = (id) => API.delete("/post" + "/" + id);

export const likePost = (id) => API.patch("/post" + "/" + id + "/likePost");

export const signIn = (formData) => API.post("/user/signin", formData);

export const signUp = (formData) => API.post("/user/signup", formData);
