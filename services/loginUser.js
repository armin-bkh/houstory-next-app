import http from "services/httpServices";

export const loginUser = (user) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return http.post("/auth/login", user, headers);
};
