import { useEffect, useState } from "react";

export const useCookies = () => {
  const [cookies, setCookies] = useState(null);
  useEffect(() => {
    const allCookies = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce(
        (accumulator, [key, value]) => ({
          ...accumulator,
          [key.trim()]: decodeURIComponent(value),
        }),
        {}
      );
    setCookies(allCookies);
  }, []);

  return cookies;
};
