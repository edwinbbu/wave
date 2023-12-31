import React from "react";
import { Tiptap } from "./Tiptap";

export const App = () => {
  return (
    <div className="p-6 container mx-auto">
      <div className="text-5xl text-gray-700 pb-4">Wave</div>
      <div className="border border-gray-200 p-4">
        <Tiptap content={"Type here"} />
      </div>
    </div>
  );
};
