import styled from "styled-components";
import { RegisterType } from "../types/RegisterType";

const RegisterView = (props: RegisterType) => {
  const Container = styled.form``;
  return (
    <Container onSubmit={props.userSubmit}>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="E-Mail" />
      <input type="password" placeholder="Password" />
      <input
        type="tel"
        placeholder="Phone Number"
        pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
        title="010-0000-0000으로 입력해주세요."
      />
      <input type="text" placeholder="주소지" />
      <input type="date" placeholder="생년월일" />
      <select name="gender">
        <option value="male">남성</option>
        <option value="male">여성</option>
      </select>
      <input type="button" value="가입하기" />
    </Container>
  );
};
export default RegisterView;
