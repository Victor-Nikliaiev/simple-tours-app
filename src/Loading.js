import React, { useState, useEffect } from "react";

const Loading = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    let dotCounter = 0;
    if (Loading) {
      const timer = setInterval(() => {
        try {
          setDots((prev) => prev + "|");
          dotCounter += 1;
          if (dotCounter === 20) {
            setDots("");
            dotCounter = 0;
            clearInterval(timer);
          }
        } catch (error) {
          console.log(error);
        }
      }, 8);
    }
  }, []);
  return (
    <main className="container">
      <h1>{dots}</h1>
    </main>
  );
};

export default Loading;
