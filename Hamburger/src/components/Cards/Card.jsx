import "./Card.css"
import Image from "../../assets/images/profile.png"
import Button from "../Buttons/Button";

const Card = () => {
  return (
    <div className="container1">
      <div className="card-holder">
        <div className="card-container">
          <img src={Image} alt="profile" />
          <div className="heading">
            <h4>Laura Smith</h4>
            <p>Frontend Developer</p>
            <a href="#">laurasmith.website</a>
          </div>
          <div className="button-container">
            <Button />
          </div>
          <div className="container">
            <h3>About</h3>
            <p>l am a frontend Developer with a particular interest in making things simple and automating daily tasks. l try to keep up with security and best practices and am always looking  for new things to learn.</p>
          </div>
          <div className="container text-two">
            <h3>Interests</h3>
            <p>l am a frontend Developer with a particular interest in making things simple and automating daily tasks. l try to keep up with security.</p>
          </div>
          <div className="links">
            <div className="twitter link">
              <box-icon name='twitter' type='logo' animation='tada' rotate='90' ></box-icon>
            </div>
            <div className="facebook link">
              <box-icon name='facebook' type='logo' rotate='90' animation='tada' color='#0b0b0b' ></box-icon>
            </div>
            <div className="Instagram link">
              <box-icon name='instagram' type='logo' animation='tada' rotate='90' color='#0b0b0b' ></box-icon>
            </div>
            <div className="Github link">
              <box-icon name='github' type='logo' animation='tada' rotate='90' color='#0b0b0b' ></box-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card