// auth.js
export const isAuth = () => {
  return localStorage.getItem("token") !== null;
};
