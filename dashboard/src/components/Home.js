import { useEffect } from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authQuery = urlParams.get("auth");
    const tokenQuery = urlParams.get("token");
    console.log("Auth query:", authQuery);
    if (authQuery === "true") {
      localStorage.setItem("isAuthenticated", "true");
      if(tokenQuery){
        try{
          const base64Url = tokenQuery.split('.')[1];
          const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c){
            return '%'+ ('0' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          const decoded = JSON.parse(jsonPayload);
          const realEmail = decoded.email;
          localStorage.setItem("userEmail", realEmail);
          window.dispatchEvent(new Event("userEmailUpdated"));
          localStorage.setItem(
            "user",
            JSON.stringify({
              username: "Trader",
              email: realEmail,
            })
          );
          console.log("Successfully stored sync user:", realEmail);
        } catch(error) {
          console.error("Failed to parse secure login authentication token:", error);
        }
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
