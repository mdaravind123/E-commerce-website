import React from "react";
import { errorpage } from "../assets/image";
import { useRouteError } from "react-router-dom";

const Errorpage: React.FC = () => {
  const error = useRouteError();
  const errorDetails = error as { status?: number; statusText?: string };
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen gap-1">
      <img src={errorpage} alt="errorPage" className="h-80" />
      <p className="text-slate-400 text-[18px]">{errorDetails?.status}</p>
      <p className="text-slate-400 text-[18px]">{errorDetails?.statusText}</p>
    </div>
  );
};

export default Errorpage;
