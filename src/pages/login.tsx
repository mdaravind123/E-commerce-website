import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full gap-2">
      <div className="flex items-center gap-2 border border-[hsla(0,0%,0%,0.5)] p-2">
        <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-slate-600" />
        <input
          type="email"
          className="w-[320px] outline-none"
          placeholder="Email"
        />
      </div>
      <div className="flex items-center gap-2 border border-[hsla(0,0%,0%,0.5)] p-2">
        <FontAwesomeIcon icon={faKey} className="w-6 h-6 text-slate-600" />
        <input
          type="password"
          className="w-[320px] outline-none"
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default Login;
