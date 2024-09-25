import React from "react";
import "./index.css";
import { AllEpizodes } from "./components/All.epizodes";
import { FC } from "react";
const App: FC = () => {
  return (
    <h1 className="bg-white flex justify-center pt-20 pb-20">
      <div className="epizode-page max-w-xl  rounded-lg bg-slate-800 pb-8">
        <h2 className="text-2xl font-mono font-bold text-white pl-4">
          All epizodes
        </h2>
        <AllEpizodes />
      </div>
    </h1>
  );
};

export default App;
