const Register = () => {
  return (
    <div>
      <h2 className="page-title">Register</h2>
      <form action="post">
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="username"></label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input type="password" name="passowrd" id="passowrd" />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
