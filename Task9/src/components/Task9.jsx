export default function Task9(props) {
  return (
    <header id="user">
      <h2>
        {props.firstName} {props.lastName}
      </h2>

      <img src={props.image} alt="User" />

      <p>{props.title}</p>
    </header>
  );
}
