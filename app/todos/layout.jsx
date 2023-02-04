import React from "react";
import TodosList from "./TodosList";

export default function RootLayout({ children }) {
  return (
    <main class="flex">
      <div>
        <TodosList />
      </div>
      <div className="flex-1">{children}</div>
    </main>
  );
}
