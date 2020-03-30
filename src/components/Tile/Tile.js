import React from "react";

export default function Tile(props) {
  return (
    <div
      class="px-4 py-3 shadow-md bg-gray-100 rounded-lg mx-4 flex-1"
      role="alert"
    >
      <div class="flex flex-row justify-between items-center">
        <div class="font-bold text-gray-500">{props.heading}</div>
        <div class="text-6xl ml-5 mr-3 text-indigo-600">{props.value}</div>
      </div>
    </div>
  );
}
