import { type FC, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";

const Index: FC = () => {
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const handleCountLeftClick = () => {
    if (leftCount >= maxScore) return;
    setLeftCount(leftCount + 1);
  };

  const handleCountRightClick = () => {
    if (rightCount >= maxScore) return;
    setRightCount(rightCount + 1);
  };

  const handleUndoLeftClick = () => {
    if (leftCount <= 0) return;
    setLeftCount(leftCount - 1);
  };

  const handleUndoRightClick = () => {
    if (rightCount <= 0) return;
    setRightCount(rightCount - 1);
  };

  const handleSwapClick = () => {
    const temp = leftCount;
    setLeftCount(rightCount);
    setRightCount(temp);
  };

  return (
    <div className="p-2 min-h-[calc(100dvh-32px-8px-8px)]">
      <h1 className="text-2xl font-bold text-center text-lime-700">
        Bảng đếm điểm
      </h1>
      <div className="min-h-[calc(100dvh-32px-8px-8px)] flex flex-col justify-end gap-4">
        <input
          className="border border-lime-950 h-16 rounded-[5px] px-4 text-xl"
          placeholder="Max điểm"
          onChange={(e) => setMaxScore(Number(e.target.value || "0"))}
          type="number"
        />

        <button
          onClick={handleSwapClick}
          className="bg-lime-700 text-white h-16 rounded-[5px] text-xl font-bold"
        >
          Swap
        </button>

        <div className="flex gap-2 w-full">
          <button
            onClick={handleUndoLeftClick}
            className="border-[3px] border-slate-400 text-slate-400 h-16 rounded-[5px] w-full text-xl font-bold"
          >
            Undo
          </button>
          <button
            onClick={handleUndoRightClick}
            className="border-[3px] border-lime-600 text-lime-600 h-16 rounded-[5px] w-full text-xl font-bold"
          >
            Undo
          </button>
        </div>

        <div className="flex gap-2">
          <div
            className="bg-slate-600 w-full h-96 flex justify-center items-center text-white text-5xl rounded-[5px]"
            onClick={handleCountLeftClick}
          >
            {leftCount}
          </div>
          <div
            className="bg-lime-950 w-full h-96 flex justify-center items-center text-white text-5xl rounded-[5px]"
            onClick={handleCountRightClick}
          >
            {rightCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
