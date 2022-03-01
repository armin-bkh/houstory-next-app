import http from "services/httpServices";

export const registerUser = (user) => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return http.post("/auth/register", JSON.stringify(user), headers);
};
