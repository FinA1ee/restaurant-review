import React, { useEffect, useState } from "react";

const RequiredFields = ["name", "password", "email"];
const checkAllFieldExist = (userInfo, passValid, passMatch) => {
  if (!passValid || !passMatch || !userInfo) return false;

  for (let field of RequiredFields) {
    if (!(field in userInfo) || userInfo[field] === "") {
      return false;
    }
  }
  return true;
};

function RegisterPage(props) {
  const [userInfo, setUserInfo] = useState({});

  const [infoComplete, setInfoComplete] = useState(false);
  const [passMatch, setPassMatch] = useState(true);
  const [passValid, setPassValid] = useState(true);

  useEffect(() => {
    setInfoComplete(checkAllFieldExist(userInfo, passValid, passMatch));
  }, [userInfo, passValid, passMatch]);

  const PasswordPattern = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
  );

  const checkValidPassword = (e) => {
    const password = e.target.value;
    setPassValid(PasswordPattern.test(password));
  };

  const checkConfirmPassword = (e) => {
    const curPassword = userInfo.password;
    const confirmPassword = e.target.value;
    setPassMatch(curPassword === confirmPassword && curPassword !== "");
  };
  const submitUserRegister = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  const updateEntry = (e, attr) => {
    if (attr === "password") setPassMatch(false);
    setUserInfo({ ...userInfo, [attr]: e.target.value });
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label font-weight-bold">
          <strong>Username</strong>
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Username"
          onChange={(e) => updateEntry(e, "name")}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter Your Password"
          onChange={(e) => {
            updateEntry(e, "password");
            checkValidPassword(e);
          }}
        />
        <label
          className={
            "form-label text-danger mt-3 " + (passValid ? "d-none" : "")
          }
        >
          {"**Password Not Valid!"}
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <strong>Confirm Password</strong>
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Confirm Your Password"
          onChange={(e) => {
            updateEntry(e);
            checkConfirmPassword(e);
          }}
        />
        <label
          className={
            "form-label text-danger mt-3 " + (passMatch ? "d-none" : "")
          }
        >
          {"**Password Not Matching!"}
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label font-weight-bold">
          <strong>Email</strong>
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="email@gmail.com"
          onChange={(e) => updateEntry(e, "email")}
        />
      </div>

      <button
        className={
          "btn btn-outline-secondary mt-3" + (infoComplete ? "" : " disabled ")
        }
        type="submit"
        id="button-addon2"
        onClick={submitUserRegister}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
