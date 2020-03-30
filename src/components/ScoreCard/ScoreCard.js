import React from "react";
import Tile from "../Tile/Tile";

export default function ScoreCard() {
  return (
    <div className="flex justify-center pb-4 flex-col">
      <h1 className="text-4xl font-semibold text-center tracking-tight">
        Scorecard
      </h1>
      <div className="flex flex-col md:flex-row justify-center py-3">
        <Tile heading="Total Questions" value={0}></Tile>
        <Tile heading="Correct" value={0}></Tile>
        <Tile heading="Incorrect" value={0}></Tile>
      </div>
    </div>
  );
}
