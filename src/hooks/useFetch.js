import { useEffect, useState } from "react";

function useFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem("userData") || String([]));
    } catch (e) {
      val = [];
    }
    return val;
  });

  useEffect(() => {
    if (window.localStorage.getItem("userData") !== null) {
      let interpolatedUserInfo = JSON.parse(
        window.localStorage.getItem("userData")
      );
      setUserData(interpolatedUserInfo);
      setIsLoading(false);
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          let interpolatedUserInfo = data.map((userData) => ({
            username: userData.username,
            id: userData.id,
            name: userData.name,
            phone: userData.phone,
            website: userData.website,
            email: userData.email,
            liked: false,
          }));
          setUserData(interpolatedUserInfo);
          window.localStorage.setItem(
            "userData",
            JSON.stringify(interpolatedUserInfo)
          );
          setIsLoading(false);
        });
    }
  }, []);
  return { isLoading, userData };
}

export default useFetch;
