import { useEffect, useState } from "react";

export default function App() {
  const [cookies, setCookies] = useState(0);
  const [cps] = useState(1);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCookies((currentCookies) => {
        return currentCookies + cps;
      });
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [cookies, cps]);

  function clickHandler() {
    setCookies(cookies + cps);
  }

  return (
    <div className="cookie-container">
      <h1>Cookie Clicker</h1>
      <p>Cookies: {cookies}</p>
      <button className="button" onClick={clickHandler}>
        Click for Cookies
      </button>
    </div>
  );
}
