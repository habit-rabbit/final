import React, {Component} from 'react';


class Login extends Component {


  render() {
    console.log("Rendering <Login/>");

    return (
      <div className="login">
          <h1>Login to Your Account</h1><br/>

          <form>
            <input type="text" name="email" placeholder="Email"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="submit" name="login" value="Login"/>
          </form>

      </div>
    );
  }
}
export default Login;