function User(props) {
  return (
    <div>
      <h1> User Component </h1>
      <button onClick={props.data}> function as props </button>
    </div>
  );
}
export default User;
