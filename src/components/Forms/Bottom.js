import { Link } from "react-router-dom";
const Bottom = ({ link, desc }) => {
  return (
    <div className="login">
      <p>Already have an account?</p>
      <Link to={`/${link}`}>{desc} your account</Link>
    </div>
  );
};

export default Bottom;
