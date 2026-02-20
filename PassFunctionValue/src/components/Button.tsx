export default function Button(props:any) {
  function clickHandler() {
    console.log(`${props.children} was clicked!`);
  }

  return (
    <li>
      <button onClick={clickHandler}>
        {props.children}
      </button>
    </li>
  );
}
