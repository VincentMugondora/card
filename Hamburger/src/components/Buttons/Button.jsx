import "./Button.css";
import "boxicons";

const Button = () => {
  return (
    <div>
      <div className="email">
        <button
          className="first-btn"
          onClick={() => {
            document.body.classList.add("active");
          }}
        >
          <box-icon name="envelope"></box-icon> Email
        </button>
        <button className="linkedIn" onClick={() => {
            document.body.classList.remove("active");
          }}>
          <box-icon name="linkedin-square" type="logo"></box-icon> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Button;
