import { Link } from "react-router-dom";

export default function Books({ item }) {
  return (
    <div>
      <Link to={`/view/${item.id}`}>
        <img src={item.cover} width="200" alt={item.title} />
      </Link>
    </div>
  );
}
