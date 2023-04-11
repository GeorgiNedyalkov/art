import { useForm } from "../../hooks/useForm";
import "./Login.css";

const Login = ({ onLoginSubmit }) => {
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );

  return (
    <section>
      <h2>Login</h2>
      <form action="post" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email"></label>
          <input
            value={values.email}
            onChange={changeHandler}
            type="text"
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
