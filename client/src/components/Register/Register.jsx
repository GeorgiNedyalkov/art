import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <h2>Register</h2>
      <form action="post">
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="passowrd"
            placeholder="Password"
          />
        </div>
        <input className="button" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
