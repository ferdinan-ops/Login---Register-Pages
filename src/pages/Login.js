// import styled from "styled-components";
// import LeftBanner from "../components/LeftBanner";
// import LoginForm from "../components/LoginForm";
// import { connect } from "react-redux/";
// import { actionUserName } from "../config/action";

// const Login = (props) => {
//   const changeUser = () => {
//     props.changeUserName();
//   };

//   return (
//     <Container>
//       <LeftBanner pages="login" />
//       <LoginForm redux={props.username} changeUser={changeUser} />
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
// `;

// const reduxState = (state) => ({
//   popupProps: state.popup,
//   username: state.user,
// });

// // fungsi utk mengubah nilai state pd user di reducer.js
// const reduxDispatch = (dispatch) => ({
//   changeUserName: () => dispatch(actionUserName()),
// });

// export default connect(reduxState, reduxDispatch)(Login);

// /* Untuk melakukan connect component dengan reducer/state global
// maka kita harus melakukan seperti ini:

// import {connect} from "react-redux"

// const Component = (props) => {
//   return(
//     <div className="App">
//       <p>Lorem {props.nama_state}<p>
//     </div>
//   )
// }

// const state_redux = (state)=> {
//   nama_state: state.nama_state_global,
//   ...
// }

// const fungsi_dispatch = (dispatch) => {
//   nama_fungsi_ubah_data: () => {
//     dispatch({type: "nama_type_action"}, value: "value_yg_diubah");
//   }
// }

// export default connect(state_redux, fungsi_dispatch)(Component)
//  */

import { loginUserAPI } from "../config/action";
import LeftBanner from "../components/LeftBanner";
import { connect } from "react-redux";
import { useState } from "react";
import Head from "../components/Forms/Head";
import Bottom from "../components/Forms/Bottom";
import Form from "../components/Forms/Form";
import "../components/Forms/form.css";

const Login = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  // const [msg, setMsg] = useState("");

  const handleChangeText = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    props.loginAPI({ email, password });

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
      <LeftBanner pages="login" />
      <div className="container">
        <div className="content">
          <Head title="Login" />
          <Form
            handleSubmit={handleSubmit}
            handleChangeText={handleChangeText}
            data={data}
            isLoading={props.isLoading}
            title="Login"
          />
          <Bottom link="register" desc="Register" />
        </div>
      </div>
    </>
  );
};

const reduxState = (state) => ({ isLoading: state.isLoading });
const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
