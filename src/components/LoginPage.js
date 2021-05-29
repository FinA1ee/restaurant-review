import React, { useState } from "react";

function LoginPage(props) {
  const { login } = props;
  const initialUserState = {
    name: "",
    id: "",
  };

  const [user, setUser] = useState(initialUserState);

  const submitUserLogin = () => {
    props.login(user);
    if (login) setUser(user);
    props.history.push("/");
  };
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Your Name Here.."
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter Your Password Here.."
        />
      </div>
      <button
        className="btn btn-outline-secondary mt-3"
        type="submit"
        id="button-addon2"
        onClick={submitUserLogin}
      >
        Login
      </button>
    </form>
  );
}

export default LoginPage;
