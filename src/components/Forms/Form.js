import Button from "./Button";
import { MdLock, MdEmail } from "react-icons/md";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="form">
      <div>
        <MdEmail id="icons" />
        <input
          type="email"
          id="email"
          placeholder="E-mail"
          onChange={props.handleChangeText}
          value={props.data.email}
        />
      </div>
      <div>
        <MdLock id="icons" />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={props.data.password}
          onChange={props.handleChangeText}
        />
      </div>
      <Button title={props.title} loading={props.isLoading} />
    </form>
  );
};

export default Form;
