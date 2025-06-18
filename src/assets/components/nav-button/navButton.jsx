import "./navButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Button({ name }) {
  return (
    <li>
      {name}
      <FontAwesomeIcon icon={faAngleDown} />
    </li>
  );
}
function NavButton() {
  return (
    <div className="nav-container">
      <ul>
        <Button name={"Headphone Type"}></Button>
        <Button name={"Price"}></Button>
        <Button name={"Review"}></Button>
        <Button name={"Color"}></Button>
        <Button name={"Mateial"}></Button>
        <Button name={"Offer"}></Button>
        <Button name={"All Filters"}></Button>
      </ul>

      <ul className="sort-by">
        <Button name={"Sort by"}></Button>
      </ul>
    </div>
  );
}

export default NavButton;
