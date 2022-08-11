const Button = ({ title, loading }) => {
  return (
    <div className="sign-up">
      {loading ? (
        <button className="btn disable">Loading...</button>
      ) : (
        <button type="submit">{title}</button>
      )}
    </div>
  );
};

export default Button;
