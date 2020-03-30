import React from "react";
import Tile from "../Tile/Tile";

export default function ScoreCard() {
  return (
    <div className="flex justify-center flex-col pb-4">
      <h1 className="text-4xl font-semibold text-center tracking-tight">
        Scorecard
      </h1>
      <div className="flex justify-center py-3">
        <Tile heading="Total Questions" value={0}></Tile>
        <Tile heading="Correct" value={0}></Tile>
        <Tile heading="Incorrect" value={0}></Tile>
      </div>
    </div>
  );
}
