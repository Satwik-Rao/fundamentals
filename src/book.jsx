const Book = (props) => {
  return (
    <div className="book">
      <h2>{props.name}</h2>
      <img src={props.src} alt="book image" />
      <h3>{props.author}</h3>
      <span className="index">{`# ${props.index + 1}`}</span>
    </div>
  );
};
export default Book;
