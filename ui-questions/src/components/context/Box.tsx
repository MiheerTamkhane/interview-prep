import React from "react";
import { useTheme } from "./ThemeProvider";

const Box = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() =>
          setTheme((prev: string) => (prev === "light" ? "dark" : "light"))
        }
      >
        toggle
      </button>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: theme === "light" ? "white" : "gray",
          color: theme === "light" ? "gray" : "white",
        }}
      >
        box
      </div>
    </div>
  );
};

export default Box;
