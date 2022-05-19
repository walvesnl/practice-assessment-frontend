import "./styles.css";
export default function SpaceCard(props) {
  return (
    <div
      className="space-card"
      style={{ background: props.backgroundColor, color: props.color }}
    >
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button>Visit space</button>
    </div>
  );
}
