import { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authQuery = urlParams.get("auth");

    console.log("Auth query:", authQuery);
    console.log("Before auth:", localStorage.getItem("isAuthenticated"));

    if (authQuery === "success") {
      localStorage.setItem("isAuthenticated", "true");

      console.log(
        "After setting auth:",
        localStorage.getItem("isAuthenticated"),
      );

      localStorage.setItem(
        "user",
        JSON.stringify({
          username: "Trader",
          email: "demo@finora.com",
        }),
      );

      window.history.replaceState({}, document.title, window.location.pathname);

      return;
    }

    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    console.log("Final authentication:", isAuthenticated);

    if (!isAuthenticated) {
      console.log("REDIRECTING TO LOGIN");
      window.location.href = "http://localhost:3000/login";
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
