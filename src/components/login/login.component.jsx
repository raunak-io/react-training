import axios from "axios";

const Login = () => {
  var user = {
    name: "raunak",
    email: "fullstackerr@gmail.com",
    password: "password@123",
  };

  let apiurl = "https://apifromashu.herokuapp.com/api/";
  var login = function () {
    axios({ url: apiurl + "register", method: "post", data: user }).then(
      (res) => {
        console.log("res m getting from backend", res);
      },
      (err) => {
        console.log("err m getting in login", err);
      }
    );
  };

  const signUp = () => {
    const { email, password } = user;

    axios({
      url: apiurl + "login",
      method: "post",
      data: { email, password },
    }).then(
      (res) => {
        console.log("res m getting from backend", res);
        localStorage.setItem("user", JSON.stringify(res.data));
      },
      (err) => {
        console.log("err m getting in login", err);
      }
    );
  };

  return (
    <div>
      {JSON.stringify(user)}

      <button onClick={login}> register</button>

      <button onClick={signUp}>Login</button>
    </div>
  );
};

export default Login;
