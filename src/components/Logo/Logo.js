import burgerImage from "../../assets/logo.jpg";
import "./Logo.css";

function Logo() {
    return (
        <div className="Logo">
            <img src={burgerImage} alt="Burger Logo" />
        </div>
    )
}

export default Logo;