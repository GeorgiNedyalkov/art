import "./Login.css";

const Login = () => {
  return (
    <div>
      <h2 className="page-title">Register</h2>
      <form action="post">
        <div>
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" name="password" id="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
