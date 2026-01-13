import React from "react";

const Login = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Login Page</h2>
        </div>
        <div>
          <div>
            <h3>Username:</h3>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>Password:</h3>
            <div>
              <input type="password" />
            </div>
          </div>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <a href="#">New User? Register here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
