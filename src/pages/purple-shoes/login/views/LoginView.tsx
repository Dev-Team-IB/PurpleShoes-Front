import styled from "styled-components";
import { LoginViewType } from "../types/LoginType";

const LoginView = (props: LoginViewType) => {
  const Container = styled.form`
    display: inline;
  `;
  return (
    <Container onSubmit={props.login}>
      <div>Login</div>
      <input type="text" placeholder="ID" />
      <input type="password" placeholder="PASSWORD" />
      <input type="button" value="Login" onClick={props.login} />
    </Container>
  );
};

export default LoginView;
