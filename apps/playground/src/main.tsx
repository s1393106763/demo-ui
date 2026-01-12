import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@pabbii/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div style={{ padding: "40px" }}>
      <h1>Demo UI Playground</h1>
      <Button onClick={() => alert("Hello!")}>Click Me</Button>
    </div>
  </React.StrictMode>,
);
