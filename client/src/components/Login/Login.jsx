import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const onLoginChange = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };
  return (
    <section>
      <h2>Register</h2>
      <form action="post" onSubmit={onLoginSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            value={values.username}
            onChange={onLoginChange}
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            value={values.password}
            onChange={onLoginChange}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <input type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
