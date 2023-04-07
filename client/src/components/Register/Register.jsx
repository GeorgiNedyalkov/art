import { useForm } from "../../hooks/useForm";

import "./Register.css";

const Register = ({ onRegisterHandler }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      name: "",
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    onRegisterHandler
  );

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={onSubmit} action="post">
        <div>
          <label htmlFor="name"></label>
          <input
            value={values.name}
            onChange={changeHandler}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="username"></label>
          <input
            value={values.username}
            onChange={changeHandler}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            value={values.email}
            onChange={changeHandler}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            value={values.password}
            onChange={changeHandler}
            type="password"
            name="password"
            id="passoword"
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="reapeatPassword"></label>
          <input
            value={values.repeatPassword}
            onChange={changeHandler}
            type="password"
            name="repeatPassword"
            id="repeatPassoword"
            placeholder="Repeat Password"
          />
        </div>
        <input className="button" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
