export default function SkillList(props) {
  return (
    <>
      <span className="skill" style={{ backgroundColor: props.color }}>
        {props.name}
        {props.emoji}
      </span>
    </>
  );
}
