import React from "react";
import ResponsiveFrame from "./src/components/ResponsiveFrame";
import Root from "./src/Root"; // ←あなたの実際のルートに合わせて

export default function App() {
  return (
    <ResponsiveFrame>
      <Root />
    </ResponsiveFrame>
  );
}
