import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Login: React.FC = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <div>
            <div className="flex gap-2 shadow-lg shadow-[hsla(0,0%,0%,0.1)]">
              <FontAwesomeIcon icon={faEnvelope} className="text-slate-500" />
              <input type="email" className="p-2 outline-none w-[350px]" />
            </div>
            <div>
              <input type="password" />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <p>Show Password</p>
            </div>
            <a href="#">forgot password?</a>
            <button>Login</button>
            <p>Or sign in with Social Platforms</p>
            <div className="flex gap-2">
              <img src="#" alt="facebook" />
              <img src="#" alt="twitter" />
              <img src="#" alt="Google" />
              <img src="#" alt="LinkedIn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
