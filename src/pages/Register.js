// import styled from "styled-components";
// import LeftBanner from "../components/LeftBanner";
// import Register from "../components/Register";

// const Register = () => {
//   return (
//     <Container>
//       <LeftBanner pages="register" />
//       <Register />
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
// `;

// export default Register;

import { registerUserAPI } from "../config/action";
import LeftBanner from "../components/LeftBanner";
import { connect } from "react-redux";
import { useState } from "react";
import Head from "../components/Forms/Head";
import Bottom from "../components/Forms/Bottom";
import Form from "../components/Forms/Form";
import "../components/Forms/form.css";

const Register = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  // const [msg, setMsg] = useState("");

  /*Ingat!!
      untuk melakukan update pd state yg 
      berbentuk objek atau array harus kita
      duplikat utk update statenya!
    */
  const handleChangeText = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    props.registerAPI({ email, password });

    // if (!email && !password) {
    //   return setMsg("Kamu belum mengisikan data apapun!");
    // } else if (!email) {
    //   return setMsg("Isi Email Terlebih dahulu");
    // } else if (!password) {
    //   return setMsg("Isi Password Terlebih dahulu");
    // }
  };

  return (
    <>
      <LeftBanner pages="register" />
      <div className="container">
        <div className="content">
          <Head title="Sign Up" />
          <Form
            handleSubmit={handleSubmit}
            handleChangeText={handleChangeText}
            data={data}
            isLoading={props.isLoading}
            title="Register"
          />
          <Bottom link="login" desc="Login to" />
        </div>
      </div>
    </>
  );
};

const reduxState = (state) => ({ isLoading: state.isLoading });
const reduxDispatch = (dispatch) => ({
  registerAPI: (data) => dispatch(registerUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Register);
