import React from "react";

export default function Tile(props) {
  const { highlight = "indigo" } = props;
  return (
    <div
      class="px-4 py-3 shadow-md bg-gray-100 rounded-lg mx-4 my-2 flex-1"
      role="alert"
    >
      <div class="flex flex-row justify-between items-center">
        <div className="font-bold text-gray-500">{props.heading}</div>
        <div className={`text-6xl ml-5 mr-3 text-${highlight}-600`}>
          {props.value}
        </div>
      </div>
    </div>
  );
}
