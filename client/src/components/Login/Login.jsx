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
      <h2>Login</h2>
      <form action="post" onSubmit={onLoginSubmit}>
        <div>
          <label htmlFor="username"></label>
          <input
            value={values.username}
            onChange={onLoginChange}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            value={values.password}
            onChange={onLoginChange}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <input className="button" type="submit" value="Login" />
      </form>
    </section>
  );
};

export default Login;
