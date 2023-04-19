import React, { useEffect, useState } from "react";
import styled from "./Login.module.css";
import InputField from "../InputField/InputField";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const handleClick = (e) => {
    const userFind = userList.find(
      (person) => person.username === username && person.password === password
    );

    e.preventDefault();
    // console.log("btnclick")
    // console.log(userList)
    if (username === "" && password === "") {
      setError(true);
      setErrorTxt("*Input field cant't be blank");
    } else if (username.length <= 2) {
      setError(true);
      setErrorTxt("*username must be atleast 3 characters");
    } else if (password.length < 6) {
      setError(true);
      setErrorTxt("*Password must be atleast 6 characters");
    } else if (userFind !== undefined) {
      setError(false);
      setErrorTxt("");
      alert(`${userFind.username} Login Successfully`);
      navigate("/");
      setUserName("");
      setPassword("");
    } else {
      alert("Invalid Crediantials");
      setUserName("");
      setPassword("");
    }
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userData"));
    // console.log(data);
    setUserList(data);
  }, []);

  const handleJoinNowClick = () => {
    navigate("/register");
  };
  return (
    <div className={styled.mainContainer}>
      <div className={styled.loginContainer}>
        <h2>Login Now</h2>
        <form action="">
          <div className={styled.inputField}>
            <label htmlFor="username"> Username </label>
            <InputField
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className={styled.inputField}>
            <label htmlFor="password"> Password </label>
            <InputField
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <small>
              {error ? (
                <strong style={{ color: "red" }}>{errorTxt}</strong>
              ) : null}
            </small>
          </div>
          <div className={styled.btnContainer}>
            <Button btnName="Login" onClick={handleClick} />
          </div>
        </form>
        <div className={styled.switch}>
          <strong>Don't have account ? </strong>{" "}
          <Link
            className={styled.login}
            to="/register"
            onClick={handleJoinNowClick}
          >
            {" "}
            JoinUs Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
