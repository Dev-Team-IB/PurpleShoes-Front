import LoginView from "./views/LoginView";

const Login = () => {
  return (
    <LoginView
      login={() => {
        console.log("login");
      }}
      signUp={() => {
        console.log("password");
      }}
    />
  );
};

export default Login;
