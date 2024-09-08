import React from "react";

const Login: React.FC = () => {
  return (
    <div className="2xl:container mx-auto">
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col justify-center items-center w-full h-screen">
          <div>
            <div>
              <input type="email" />
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
