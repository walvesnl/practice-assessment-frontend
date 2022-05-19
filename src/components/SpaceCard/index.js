import "./styles.css";
import { Link } from "react-router-dom";
export default function SpaceCard(props) {
  return (
    <div
      className="space-card"
      style={{ background: props.backgroundColor, color: props.color }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link to={`spaces/${props.id}`}>
        <button>Visit space</button>
      </Link>
    </div>
  );
}
