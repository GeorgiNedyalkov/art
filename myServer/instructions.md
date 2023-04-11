# How to set up users and authentication in web apps

In the server and client.

## Server

- Create a user model with necessary fields.
- Create a controller to handle requests and send them to...
- Create a manager/ service to handle communication with the database and the logic for

checking if the user exists
checking if the password and repeat passwords match

## Register

In the controller for users or authenticaiton we create a post request
and register the user passing the body of the request to the service.

In the service:

- We check first to see if the password matches the repeat password. If not we throw Error.
- We check to see if the user already exists with the same email or username using the _findOne_ mongoose
  and _$or_. If it does we throw Error.

```javascript
const existingUser = User.findOne({
  $or: [{ email }, { username }],
});
```

- We then hash the password with bcrypt.
- We create a user with the username, email and password.
- Finaly we return the login method

## Login

For login we need jwt token.

- Before that we need to promisify jwt using the util module

```javascript
const util = require("util");
const jwt = require("jsonwebtoken");

exports.sign = util.promisify(jwt.sign);
exports.verify = util.promisify(jwt.verify);
```

- First we check if the user already exists with the same username or email.
- We check to see if there is no user with such email or username. If there isn't we throw error.
- We check to see if the password is valid by camparing it with bcrypt. If the password is not valid
  we throw an error.
- We generate a token with a _payload_, and a _secret_. We can generate a payload object with all the data
  that we want to pass. Finally we sign the token with jwt passing the payload and secret and we return it.
