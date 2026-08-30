import { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authQuery = urlParams.get("auth");
    const emailQuery = urlParams.get("email");

    console.log("Auth query:", authQuery);
    console.log("Before auth:", localStorage.getItem("isAuthenticated"));

    if (authQuery === "true") {
      localStorage.setItem("isAuthenticated", "true");
      console.log(
        "After setting auth:",
        localStorage.getItem("isAuthenticated"),
      );
      if(emailQuery){
        localStorage.setItem("userEmail", decodeURIComponent(emailQuery));
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: "Trader",
            email: decodeURIComponent(emailQuery),
          }),
        );
      }
    }
    window.history.replaceState({}, document.title, window.location.pathname);

    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    console.log("Final authentication:", isAuthenticated);

    if (!isAuthenticated) {
      console.log("REDIRECTING TO LOGIN");
      window.location.href = "https://finora-frontend-33rx.onrender.com";
    }
  }, []);

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
