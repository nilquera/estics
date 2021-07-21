import { Link } from "wouter";
import "./Gif.css";

export default function Gif({ title, id, url }) {
  return (
    <div className="Gif">
      <Link to={`/sticker/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" alt={title} src={url} />
      </Link>
    </div>
  );
}
