import { Link } from "react-router-dom";

export default function Books({ item }) {
  const booksContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
  };
  const booksInforStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    texAlign: "center",
    color: "white",
    textDecoration: "none"
  };
  const titleStyles = {

  }

  return (
    <div style={booksContainerStyle}>
      <Link to={`/view/${item.id}`} style={booksInforStyle}>
        <img src={item.cover} width="200" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}
