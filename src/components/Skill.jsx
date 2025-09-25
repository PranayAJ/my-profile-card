export default function Skill(props) {
  return (
    <>
      <span className="skill" style={{ backgroundColor: props.color }}>
        {props.name}
        {props.emoji}
      </span>
    </>
  );
}
