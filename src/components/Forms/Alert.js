const Alert = ({ msg }) => {
  return (
    <div className={msg ? "alert active" : "alert"}>
      {msg}
      <img
        className="close"
        src="/assets/icons/close.svg"
        alt=""
        // onClick={() => setMsg("")}
      />
    </div>
  );
};

export default Alert;
