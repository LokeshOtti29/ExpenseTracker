import React from "react";

const Register = () => {
  return (
    <div>
      <div>
        <div>
          <h2>Registration</h2>
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
          <div>
            <h3>Email:</h3>
            <div>
              <input type="Email" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h3>FullName:</h3>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div>
          <button>Login</button>
        </div>
        <div>
          <a href="#">Already have account? Login here</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
