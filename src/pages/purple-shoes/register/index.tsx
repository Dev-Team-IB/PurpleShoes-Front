import RegisterView from "./views/RegisterView";

const Register = () => {
  return (
    <RegisterView
      userSubmit={() => {
        alert("hello");
      }}
    />
  );
};
export default Register;
